export const tryCatch = async (
   callback: (...args: any[]) => any
): Promise<any> => {
   try {
      return await callback();
   } catch (err) {
      console.log(err);
   }
};
