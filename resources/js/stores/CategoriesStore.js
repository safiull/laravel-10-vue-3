import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("CategoriesStore", {
    state: () => {
        return {
            categories: [],
            currentPage: 1,
            totalPages: 0,
        }
    },
    actions: {
        addCategory(category) {
            this.categories.push(category);
        },
        removeCategory(categoryId) {
            const index = this.categories.findIndex(
                (category) => category.id === categoryId
            );
            if (index !== -1) {
                this.categories.splice(index, 1);
            }
        },
        setCategories(categories) {
            this.categories = categories;
        },
    },
});
