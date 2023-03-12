import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      currentUser: {
        details: {
          _id: "",
          fullname: "",
          username: "",
          email: "",
          location: "",
          phone: "",
          bio: "",
          pic: "https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png",
          reviews: [],
          rated: [],
          cart: [],
          createdAt: "",
          updatedAt: "",
          __v: null,
        },
        isAdmin: false,
      },
    }),
    {
      name: "user-metadata",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
