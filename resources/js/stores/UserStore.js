import { defineStore } from "pinia";
import users from '../vue/components/users/users.json'

export const useUsersStore = defineStore("UsersStore", {
    state: () => {
        return {
            users: users
        }
    },
    // actions: {
    //     addCategory(category) {
    //         this.categories.push(category);
    //     },
    //     removeCategory(categoryId) {
    //         const index = this.categories.findIndex(
    //             (category) => category.id === categoryId
    //         );
    //         if (index !== -1) {
    //             this.categories.splice(index, 1);
    //         }
    //     },
    //     setCategories(categories) {
    //         this.categories = categories;
    //     },
    // },
});
