import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("CategoriesStore", {
    state: () => {
        return {
            categories: [],
            currentPage: 1,
            totalPages: 0,
        };
    },
    getters: {
        getCategoryById: (state) => (id) => {
            return state.categories.find(category => category.id == id);
        },
    },
    actions: {
        setCategories(categories) {
            this.categories = categories;
        },
        addCategory(category) {
            this.categories.push(category);
        },
        updateCategory(category) {
            const index = this.categories.findIndex(
                (cat) => cat.id === category.id
            );
            if (index !== -1) {
                this.categories[index] = category;
            }
        },
        removeCategory(categoryId) {
            const index = this.categories.findIndex(
                (category) => category.id === categoryId
            );
            if (index !== -1) {
                this.categories.splice(index, 1);
            }
        },
    },
});
