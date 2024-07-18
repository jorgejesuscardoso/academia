export  const calculateAge = (birthDate: string) => {
  if (!birthDate) return NaN;
  
  const [day, month, year] = birthDate.split('/').map(Number);
  const birth = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

export const calculateDaysUntil = (date: string) => {
  try {
    if (!date) {
      return NaN;
    }
    const [day, month, year] = date.split('/').map(Number);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      throw new Error("Invalid date format");
    }

    const targetDate = new Date(year, month - 1, day);
    const today = new Date();
    const diff = targetDate.getTime() - today.getTime();
    const days = diff / (1000 * 60 * 60 * 24);

    

    return Number(Math.round(days));
  } catch (error) {
    console.error(error);
    return NaN; 
  }
}

