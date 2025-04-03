
import { useState } from "react";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import MealRecommendations from "@/components/MealRecommendations";
import FoodSearch from "@/components/FoodSearch";
import NutritionTracker from "@/components/NutritionTracker";
import UserProfile from "@/components/UserProfile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <div className="flex-1">
        <div className="container px-0 sm:px-4">
          <Tabs
            defaultValue="dashboard"
            value={activeTab}
            onValueChange={setActiveTab}
            className="mt-2"
          >
            <div className="border-b sticky top-16 bg-white/80 backdrop-blur-md z-10">
              <TabsList className="bg-transparent h-14 w-full justify-start overflow-x-auto">
                <TabsTrigger
                  value="dashboard"
                  className="data-[state=active]:bg-secondary rounded-none data-[state=active]:rounded-t-md px-4 py-2"
                >
                  Dashboard
                </TabsTrigger>
                <TabsTrigger
                  value="meals"
                  className="data-[state=active]:bg-secondary rounded-none data-[state=active]:rounded-t-md px-4 py-2"
                >
                  Meal Recommendations
                </TabsTrigger>
                <TabsTrigger
                  value="tracker"
                  className="data-[state=active]:bg-secondary rounded-none data-[state=active]:rounded-t-md px-4 py-2"
                >
                  Nutrition Tracker
                </TabsTrigger>
                <TabsTrigger
                  value="foods"
                  className="data-[state=active]:bg-secondary rounded-none data-[state=active]:rounded-t-md px-4 py-2"
                >
                  Food Database
                </TabsTrigger>
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-secondary rounded-none data-[state=active]:rounded-t-md px-4 py-2"
                >
                  Profile
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="dashboard" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <Dashboard />
              <MealRecommendations />
            </TabsContent>
            
            <TabsContent value="meals" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <MealRecommendations />
            </TabsContent>
            
            <TabsContent value="tracker" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <NutritionTracker />
            </TabsContent>
            
            <TabsContent value="foods" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <FoodSearch />
            </TabsContent>
            
            <TabsContent value="profile" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <UserProfile />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;
