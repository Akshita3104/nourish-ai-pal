
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const UserProfile = () => {
  const [formState, setFormState] = useState({
    name: "Alex Johnson",
    age: 32,
    height: 175,
    weight: 70,
    gender: "male",
    activityLevel: "moderate",
    goal: "maintain",
  });

  const dietaryRestrictions = [
    { id: "vegetarian", label: "Vegetarian" },
    { id: "vegan", label: "Vegan" },
    { id: "glutenFree", label: "Gluten-Free" },
    { id: "dairyFree", label: "Dairy-Free" },
    { id: "nutFree", label: "Nut-Free" },
    { id: "lowCarb", label: "Low-Carb" },
    { id: "keto", label: "Keto-Friendly" }
  ];

  const handleFormChange = (field: string, value: any) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  return (
    <div className="py-6 px-4 md:px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
        <p className="text-muted-foreground">
          Update your profile and dietary preferences
        </p>
      </div>

      <Tabs defaultValue="personal" className="space-y-4">
        <TabsList className="grid grid-cols-2 max-w-md mb-4">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="dietary">Dietary Preferences</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    id="name"
                    value={formState.name}
                    onChange={(e) => handleFormChange("name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <FormLabel>Age</FormLabel>
                  <Input
                    id="age"
                    type="number"
                    value={formState.age}
                    onChange={(e) => handleFormChange("age", parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FormLabel>Height (cm)</FormLabel>
                  <Input
                    id="height"
                    type="number"
                    value={formState.height}
                    onChange={(e) => handleFormChange("height", parseInt(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <FormLabel>Weight (kg)</FormLabel>
                  <Input
                    id="weight"
                    type="number"
                    value={formState.weight}
                    onChange={(e) => handleFormChange("weight", parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <FormLabel>Gender</FormLabel>
                <Select
                  value={formState.gender}
                  onValueChange={(value) => handleFormChange("gender", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <FormLabel>Activity Level</FormLabel>
                <Select
                  value={formState.activityLevel}
                  onValueChange={(value) => handleFormChange("activityLevel", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                    <SelectItem value="light">
                      Lightly active (light exercise 1-3 days/week)
                    </SelectItem>
                    <SelectItem value="moderate">
                      Moderately active (moderate exercise 3-5 days/week)
                    </SelectItem>
                    <SelectItem value="active">
                      Very active (hard exercise 6-7 days/week)
                    </SelectItem>
                    <SelectItem value="extreme">
                      Extremely active (very hard exercise, physical job or training twice a day)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <FormLabel>Fitness Goal</FormLabel>
                <Select
                  value={formState.goal}
                  onValueChange={(value) => handleFormChange("goal", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lose">Weight Loss</SelectItem>
                    <SelectItem value="maintain">Maintain Weight</SelectItem>
                    <SelectItem value="gain">Muscle Gain</SelectItem>
                    <SelectItem value="athletic">Athletic Performance</SelectItem>
                    <SelectItem value="health">General Health</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="dietary" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dietary Restrictions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dietaryRestrictions.map((restriction) => (
                  <div key={restriction.id} className="flex items-center space-x-2">
                    <Checkbox id={restriction.id} />
                    <FormLabel htmlFor={restriction.id} className="!mt-0">
                      {restriction.label}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Macronutrient Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <FormLabel>Protein</FormLabel>
                  <span className="text-sm font-medium">30%</span>
                </div>
                <Slider defaultValue={[30]} max={100} step={1} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <FormLabel>Carbohydrates</FormLabel>
                  <span className="text-sm font-medium">45%</span>
                </div>
                <Slider defaultValue={[45]} max={100} step={1} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <FormLabel>Fat</FormLabel>
                  <span className="text-sm font-medium">25%</span>
                </div>
                <Slider defaultValue={[25]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Food Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormLabel>Favorite Cuisines (select multiple)</FormLabel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {["Italian", "Mexican", "Thai", "Indian", "Japanese", "Mediterranean", 
                  "American", "Chinese", "French"].map((cuisine) => (
                  <div key={cuisine} className="flex items-center space-x-2">
                    <Checkbox id={`cuisine-${cuisine.toLowerCase()}`} />
                    <FormLabel htmlFor={`cuisine-${cuisine.toLowerCase()}`} className="!mt-0">
                      {cuisine}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end mt-6">
        <Button className="w-full md:w-auto">Save Changes</Button>
      </div>
    </div>
  );
};

export default UserProfile;
