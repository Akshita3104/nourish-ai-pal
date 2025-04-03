
export interface Food {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
  sugar?: number;
  sodium?: number;
  category: string;
  image?: string;
}

export interface NutrientGoal {
  name: string;
  value: number;
  target: number;
  unit: string;
}

export interface UserPreference {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  nutFree: boolean;
  lowCarb: boolean;
  keto: boolean;
}

// Convert height in cm to feet and inches
export function cmToFeetInches(cm: number): string {
  const inches = cm / 2.54;
  const feet = Math.floor(inches / 12);
  const remainingInches = Math.round(inches % 12);
  return `${feet}'${remainingInches}"`;
}

// Calculate BMI
export function calculateBMI(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return parseFloat((weightKg / (heightM * heightM)).toFixed(1));
}

// Calculate daily calorie needs using Mifflin-St Jeor Equation
export function calculateCalories(
  age: number,
  gender: string,
  weightKg: number,
  heightCm: number,
  activityLevel: string
): number {
  // Base calculation
  let bmr;
  if (gender === "male") {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }

  // Apply activity factor
  const activityFactors: { [key: string]: number } = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    extreme: 1.9,
  };

  return Math.round(bmr * activityFactors[activityLevel]);
}

// Calculate macronutrient distribution
export function calculateMacros(
  calories: number,
  proteinPercentage: number,
  carbsPercentage: number,
  fatPercentage: number
): { protein: number; carbs: number; fat: number } {
  const proteinCalories = calories * (proteinPercentage / 100);
  const carbsCalories = calories * (carbsPercentage / 100);
  const fatCalories = calories * (fatPercentage / 100);

  return {
    protein: Math.round(proteinCalories / 4), // 4 calories per gram of protein
    carbs: Math.round(carbsCalories / 4), // 4 calories per gram of carbs
    fat: Math.round(fatCalories / 9), // 9 calories per gram of fat
  };
}

// Format nutrition value with its unit
export function formatNutritionValue(value: number, unit: string): string {
  return `${value}${unit}`;
}

// Calculate nutrient progress as a percentage
export function calculateProgress(current: number, target: number): number {
  return Math.min(100, Math.round((current / target) * 100));
}
