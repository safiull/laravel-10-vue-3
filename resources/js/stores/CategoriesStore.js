import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categories", {
    state: () => ({
        categories: [],
    }),
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
