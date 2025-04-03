
import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, BarChart2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface NutrientLog {
  date: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  water: number;
}

const NutritionTracker = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric'
    }).format(date);
  };

  const nutrientLogs: NutrientLog[] = [
    {
      date: "2025-04-01",
      calories: 1850,
      protein: 95,
      carbs: 180,
      fat: 55,
      water: 2.1
    },
    {
      date: "2025-04-02",
      calories: 1920,
      protein: 110,
      carbs: 165,
      fat: 62,
      water: 2.4
    },
    {
      date: "2025-04-03",
      calories: 1450,
      protein: 75,
      carbs: 156,
      fat: 48,
      water: 1.2
    }
  ];

  const meals = [
    {
      id: "breakfast",
      name: "Breakfast",
      time: "7:30 AM",
      items: [
        { name: "Greek Yogurt", calories: 120, protein: 15, carbs: 8, fat: 0 },
        { name: "Granola", calories: 180, protein: 4, carbs: 32, fat: 6 },
        { name: "Blueberries", calories: 40, protein: 0, carbs: 10, fat: 0 }
      ]
    },
    {
      id: "lunch",
      name: "Lunch",
      time: "12:30 PM",
      items: [
        { name: "Quinoa Salad", calories: 320, protein: 12, carbs: 45, fat: 10 },
        { name: "Grilled Chicken", calories: 220, protein: 35, carbs: 0, fat: 8 }
      ]
    },
    {
      id: "snack",
      name: "Snack",
      time: "3:30 PM",
      items: [
        { name: "Apple", calories: 95, protein: 0, carbs: 25, fat: 0 },
        { name: "Almonds", calories: 160, protein: 6, carbs: 6, fat: 14 }
      ]
    },
    {
      id: "dinner",
      name: "Dinner",
      time: "7:00 PM",
      items: [
        { name: "Salmon Fillet", calories: 280, protein: 32, carbs: 0, fat: 18 },
        { name: "Sweet Potato", calories: 115, protein: 2, carbs: 27, fat: 0 },
        { name: "Steamed Broccoli", calories: 55, protein: 4, carbs: 10, fat: 0 }
      ]
    }
  ];

  const handlePrevDay = () => {
    const prevDay = new Date(currentDate);
    prevDay.setDate(prevDay.getDate() - 1);
    setCurrentDate(prevDay);
  };

  const handleNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setCurrentDate(nextDay);
  };

  const calculateTotalMacros = () => {
    let totals = { calories: 0, protein: 0, carbs: 0, fat: 0 };
    
    meals.forEach(meal => {
      meal.items.forEach(item => {
        totals.calories += item.calories;
        totals.protein += item.protein;
        totals.carbs += item.carbs;
        totals.fat += item.fat;
      });
    });
    
    return totals;
  };

  const totals = calculateTotalMacros();

  return (
    <div className="py-6 px-4 md:px-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Nutrition Tracker</h2>
          <p className="text-muted-foreground">Track your daily nutrition intake</p>
        </div>
        
        <div className="flex items-center space-x-1 bg-slate-100 rounded-md p-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={handlePrevDay}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center px-2">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">{formatDate(currentDate)}</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={handleNextDay}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center">
              <BarChart2 className="h-4 w-4 mr-2 text-nutrition-orange" />
              Calories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totals.calories}</div>
            <p className="text-muted-foreground text-sm">of 2000 kcal goal</p>
            <div className="w-full bg-slate-100 rounded-full h-2 mt-2">
              <div 
                className="bg-nutrition-orange h-2 rounded-full" 
                style={{ width: `${Math.min(100, (totals.calories / 2000) * 100)}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center">
              <BarChart2 className="h-4 w-4 mr-2 text-nutrition-purple" />
              Protein
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totals.protein}g</div>
            <p className="text-muted-foreground text-sm">of 120g goal</p>
            <div className="w-full bg-slate-100 rounded-full h-2 mt-2">
              <div 
                className="bg-nutrition-purple h-2 rounded-full" 
                style={{ width: `${Math.min(100, (totals.protein / 120) * 100)}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center">
              <BarChart2 className="h-4 w-4 mr-2 text-nutrition-green" />
              Carbs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totals.carbs}g</div>
            <p className="text-muted-foreground text-sm">of 225g goal</p>
            <div className="w-full bg-slate-100 rounded-full h-2 mt-2">
              <div 
                className="bg-nutrition-green h-2 rounded-full" 
                style={{ width: `${Math.min(100, (totals.carbs / 225) * 100)}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="meals">
        <TabsList className="mb-4">
          <TabsTrigger value="meals">Meals</TabsTrigger>
          <TabsTrigger value="nutrients">Nutrients</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>
        
        <TabsContent value="meals" className="space-y-4">
          {meals.map((meal) => (
            <Card key={meal.id}>
              <CardHeader className="py-3 px-4 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-base">{meal.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{meal.time}</p>
                </div>
                <Button variant="outline" size="sm" className="h-7 text-xs">
                  Add Food
                </Button>
              </CardHeader>
              <CardContent className="pt-0 px-4 pb-3">
                {meal.items.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b last:border-0 border-slate-100">
                    <div>
                      <p className="text-sm">{item.name}</p>
                      <div className="flex gap-3 text-xs text-muted-foreground mt-0.5">
                        <span>P: {item.protein}g</span>
                        <span>C: {item.carbs}g</span>
                        <span>F: {item.fat}g</span>
                      </div>
                    </div>
                    <div className="text-sm font-medium">{item.calories} kcal</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="nutrients">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-center mb-6">
                Detailed breakdown of your nutritional intake
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Calories</span>
                  <span>{totals.calories} kcal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Protein</span>
                  <span>{totals.protein}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Carbohydrates</span>
                  <span>{totals.carbs}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Fat</span>
                  <span>{totals.fat}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sugar</span>
                  <span>24g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Fiber</span>
                  <span>18g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sodium</span>
                  <span>1840mg</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="trends">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-center mb-6">
                Weekly trends will be displayed here
              </p>
              <div className="h-48 flex items-center justify-center border rounded-md border-dashed">
                <p className="text-muted-foreground">
                  Charts and trends will appear when you have more data
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NutritionTracker;
