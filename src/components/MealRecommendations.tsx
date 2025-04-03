
import { Check, ChevronRight, Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Meal {
  id: string;
  name: string;
  imageUrl: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  prepTime: number;
  tags: string[];
}

const MealRecommendations = () => {
  const meals: Meal[] = [
    {
      id: "meal1",
      name: "Protein-Rich Greek Yogurt Bowl",
      imageUrl: "https://images.unsplash.com/photo-1604429868519-8a64d83b0d3b?q=80&w=600&auto=format&fit=crop",
      calories: 380,
      protein: 24,
      carbs: 45,
      fat: 12,
      prepTime: 5,
      tags: ["High Protein", "Vegetarian", "Breakfast"]
    },
    {
      id: "meal2",
      name: "Mediterranean Quinoa Salad",
      imageUrl: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=600&auto=format&fit=crop",
      calories: 420,
      protein: 18,
      carbs: 52,
      fat: 16,
      prepTime: 15,
      tags: ["High Fiber", "Vegan", "Lunch"]
    },
    {
      id: "meal3",
      name: "Baked Salmon with Asparagus",
      imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop",
      calories: 480,
      protein: 32,
      carbs: 20,
      fat: 26,
      prepTime: 25,
      tags: ["High Protein", "Omega-3", "Dinner"]
    }
  ];

  return (
    <div className="py-6 px-4 md:px-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Personalized Meal Recommendations</h2>
          <p className="text-muted-foreground">
            Based on your nutrition goals and preferences
          </p>
        </div>
        <Button variant="outline" size="sm" className="flex items-center">
          <span>See All</span>
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <Card key={meal.id} className="meal-card overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={meal.imageUrl} 
                alt={meal.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base">{meal.name}</CardTitle>
                <span className="text-xs font-medium bg-nutrition-lightGreen/10 text-nutrition-green px-2 py-0.5 rounded-full">
                  {meal.calories} kcal
                </span>
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {meal.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                <div className="flex items-center">
                  <Utensils className="h-3 w-3 mr-1" />
                  <span>{meal.prepTime} min</span>
                </div>
                <div className="flex gap-3">
                  <span>P: {meal.protein}g</span>
                  <span>C: {meal.carbs}g</span>
                  <span>F: {meal.fat}g</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="w-full">
                  <Check className="mr-1 h-4 w-4" />
                  Add to Plan
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MealRecommendations;
