
import { 
  Activity, 
  Apple, 
  BarChart3, 
  Calendar, 
  Droplets, 
  FlameKindling,
  Utensils
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface NutritionStat {
  name: string;
  value: number;
  unit: string;
  target: number;
  icon: JSX.Element;
  color: string;
}

const Dashboard = () => {
  const nutritionStats: NutritionStat[] = [
    {
      name: "Calories",
      value: 1450,
      target: 2000,
      unit: "kcal",
      icon: <FlameKindling className="w-4 h-4" />,
      color: "text-nutrition-orange"
    },
    {
      name: "Protein",
      value: 75,
      target: 120,
      unit: "g",
      icon: <Activity className="w-4 h-4" />,
      color: "text-nutrition-purple"
    },
    {
      name: "Carbs",
      value: 156,
      target: 225,
      unit: "g",
      icon: <Apple className="w-4 h-4" />,
      color: "text-nutrition-green"
    },
    {
      name: "Fat",
      value: 48,
      target: 65,
      unit: "g",
      icon: <BarChart3 className="w-4 h-4" />,
      color: "text-nutrition-blue"
    },
    {
      name: "Water",
      value: 1.2,
      target: 2.5,
      unit: "L",
      icon: <Droplets className="w-4 h-4" />,
      color: "text-nutrition-lightBlue"
    }
  ];

  return (
    <div className="py-6 px-4 md:px-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Good afternoon, Alex</h1>
          <p className="text-muted-foreground">Here's your nutrition summary for today</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Today</span>
          <Calendar className="h-4 w-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Nutrition Card */}
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Utensils className="mr-2 h-5 w-5 text-nutrition-green" />
              Daily Nutrition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {nutritionStats.map((stat) => (
                <div key={stat.name} className="nutrition-item space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className={`mr-2 ${stat.color}`}>{stat.icon}</span>
                      <span className="text-sm font-medium">{stat.name}</span>
                    </div>
                    <span className="text-sm font-medium">
                      {stat.value} / {stat.target} {stat.unit}
                    </span>
                  </div>
                  <Progress value={(stat.value / stat.target) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="col-span-1 bg-secondary">
          <CardHeader>
            <CardTitle className="text-base">AI Nutrition Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="font-medium text-nutrition-green">Great progress!</p>
                <p className="text-gray-600 mt-1">You're consistently meeting your protein goals this week.</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="font-medium text-nutrition-blue">Suggestion</p>
                <p className="text-gray-600 mt-1">Try adding more leafy greens for more fiber and vitamins.</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="font-medium text-nutrition-orange">Reminder</p>
                <p className="text-gray-600 mt-1">You're 1.3L below your daily water goal.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
