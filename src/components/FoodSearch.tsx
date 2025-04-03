import { useState } from "react";
import { Search, Plus, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FoodItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  category: string;
  image?: string;
}

const FoodSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const foodItems: FoodItem[] = [
    {
      id: "food1",
      name: "Chicken Breast (100g)",
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      category: "protein",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: "food2",
      name: "Brown Rice (100g, cooked)",
      calories: 112,
      protein: 2.6,
      carbs: 23,
      fat: 0.8,
      category: "carbs",
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvd24lMjByaWNlfGVufDB8fDB8fHww"
    },
    {
      id: "food3",
      name: "Avocado (1 medium)",
      calories: 240,
      protein: 3,
      carbs: 12,
      fat: 22,
      category: "fat",
      image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZvY2Fkb3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: "food4",
      name: "Greek Yogurt (100g)",
      calories: 59,
      protein: 10,
      carbs: 3.6,
      fat: 0.4,
      category: "protein",
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWslMjB5b2d1cnR8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: "food5",
      name: "Sweet Potato (1 medium)",
      calories: 112,
      protein: 2,
      carbs: 26,
      fat: 0.1,
      category: "carbs",
      image: "https://images.unsplash.com/photo-1596097635121-14b8d7f3b970?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dlZXQlMjBwb3RhdG98ZW58MHx8MHx8fDA%3D"
    },
    {
      id: "food6",
      name: "Salmon (100g)",
      calories: 208,
      protein: 20,
      carbs: 0,
      fat: 13,
      category: "protein",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9ufGVufDB8fDB8fHww"
    }
  ];

  const filteredFoods = foodItems.filter(food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-6 px-4 md:px-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Food Database</h2>
        <p className="text-muted-foreground">
          Search for foods to view nutrition information or add to your daily log
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search foods..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="protein">Protein</TabsTrigger>
          <TabsTrigger value="carbs">Carbs</TabsTrigger>
          <TabsTrigger value="fat">Fat</TabsTrigger>
          <TabsTrigger value="recent">Recently Used</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFoods.map((food) => (
              <Card key={food.id} className="overflow-hidden">
                <div className="flex">
                  {food.image && (
                    <div className="w-1/3">
                      <img 
                        src={food.image} 
                        alt={food.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <CardContent className={`flex-1 p-3 ${!food.image ? 'w-full' : ''}`}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-sm">{food.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {food.calories} kcal
                      </Badge>
                    </div>
                    <div className="flex text-xs text-muted-foreground gap-2 mb-3">
                      <span>P: {food.protein}g</span>
                      <span>C: {food.carbs}g</span>
                      <span>F: {food.fat}g</span>
                    </div>
                    <Button size="sm" variant="outline" className="w-full h-7 text-xs">
                      <Plus className="h-3 w-3 mr-1" />
                      Add
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="protein" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFoods
              .filter((food) => food.category === "protein")
              .map((food) => (
                <Card key={food.id} className="overflow-hidden">
                  <div className="flex">
                    {food.image && (
                      <div className="w-1/3">
                        <img 
                          src={food.image} 
                          alt={food.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <CardContent className={`flex-1 p-3 ${!food.image ? 'w-full' : ''}`}>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-sm">{food.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {food.calories} kcal
                        </Badge>
                      </div>
                      <div className="flex text-xs text-muted-foreground gap-2 mb-3">
                        <span>P: {food.protein}g</span>
                        <span>C: {food.carbs}g</span>
                        <span>F: {food.fat}g</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full h-7 text-xs">
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    </CardContent>
                  </div>
                </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="carbs" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFoods
              .filter((food) => food.category === "carbs")
              .map((food) => (
                <Card key={food.id} className="overflow-hidden">
                  <div className="flex">
                    {food.image && (
                      <div className="w-1/3">
                        <img 
                          src={food.image} 
                          alt={food.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <CardContent className={`flex-1 p-3 ${!food.image ? 'w-full' : ''}`}>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-sm">{food.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {food.calories} kcal
                        </Badge>
                      </div>
                      <div className="flex text-xs text-muted-foreground gap-2 mb-3">
                        <span>P: {food.protein}g</span>
                        <span>C: {food.carbs}g</span>
                        <span>F: {food.fat}g</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full h-7 text-xs">
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    </CardContent>
                  </div>
                </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="fat" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFoods
              .filter((food) => food.category === "fat")
              .map((food) => (
                <Card key={food.id} className="overflow-hidden">
                  <div className="flex">
                    {food.image && (
                      <div className="w-1/3">
                        <img 
                          src={food.image} 
                          alt={food.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <CardContent className={`flex-1 p-3 ${!food.image ? 'w-full' : ''}`}>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-sm">{food.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {food.calories} kcal
                        </Badge>
                      </div>
                      <div className="flex text-xs text-muted-foreground gap-2 mb-3">
                        <span>P: {food.protein}g</span>
                        <span>C: {food.carbs}g</span>
                        <span>F: {food.fat}g</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full h-7 text-xs">
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    </CardContent>
                  </div>
                </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="recent" className="m-0">
          <div className="flex items-center justify-center h-40 border-2 border-dashed rounded-md border-gray-200">
            <p className="text-muted-foreground">Your recently used foods will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FoodSearch;
