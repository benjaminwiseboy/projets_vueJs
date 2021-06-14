import { createStore } from "vuex";

export default createStore({
  state: {
    listeArticles: [
      {
        id: 1,
        nom: "Montre connectée Lotus Smartime",
        prix: 45,
        imgUrl:
          "https://ocarat.com/257052-large_default/montre-connectee-lotus-smartime-500021-lotus.jpg",
        favori: false,
      },

      {
        id: 2,
        nom: "Montre Boss Integrity Noire",
        prix: 75,
        imgUrl:
          "https://www.marc-orian.com/dw/image/v2/BCQS_PRD/on/demandware.static/-/Sites-THOM_CATALOG/default/dw9598df7c/images/HIMHN1N476-view1.jpg?sw=1024&sh=1024",
        favori: false,
      },

      {
        id: 3,
        nom: "Montre homme Diesel en acier noir",
        prix: 125,
        imgUrl:
          "https://www.cleor.com/media/catalog/product/cache/98234b6f098e120d7f728f93649aac55/d/z/dz4283_010_bijcrpbl97pknxik.jpg",
        favori: false,
      },
      {
        id: 4,
        nom: "Montre connectée Lotus Smartime",
        prix: 45,
        imgUrl:
          "https://ocarat.com/257052-large_default/montre-connectee-lotus-smartime-500021-lotus.jpg",
        favori: false,
      },

      {
        id: 5,
        nom: "Montre Boss Integrity Noire",
        prix: 75,
        imgUrl:
          "https://www.marc-orian.com/dw/image/v2/BCQS_PRD/on/demandware.static/-/Sites-THOM_CATALOG/default/dw9598df7c/images/HIMHN1N476-view1.jpg?sw=1024&sh=1024",
        favori: false,
      },

      {
        id: 6,
        nom: "Montre homme Diesel en acier noir",
        prix: 125,
        imgUrl:
          "https://www.cleor.com/media/catalog/product/cache/98234b6f098e120d7f728f93649aac55/d/z/dz4283_010_bijcrpbl97pknxik.jpg",
        favori: false,
      },

      {
        id: 7,
        nom: "Montre connectée Lotus Smartime",
        prix: 45,
        imgUrl:
          "https://ocarat.com/257052-large_default/montre-connectee-lotus-smartime-500021-lotus.jpg",
        favori: false,
      },

      {
        id: 8,
        nom: "Montre Boss Integrity Noire",
        prix: 75,
        imgUrl:
          "https://www.marc-orian.com/dw/image/v2/BCQS_PRD/on/demandware.static/-/Sites-THOM_CATALOG/default/dw9598df7c/images/HIMHN1N476-view1.jpg?sw=1024&sh=1024",
        favori: false,
      },

      {
        id: 9,
        nom: "Montre homme Diesel en acier noir",
        prix: 125,
        imgUrl:
          "https://www.cleor.com/media/catalog/product/cache/98234b6f098e120d7f728f93649aac55/d/z/dz4283_010_bijcrpbl97pknxik.jpg",
        favori: false,
      },
      {
        id: 10,
        nom: "Montre connectée Lotus Smartime",
        prix: 45,
        imgUrl:
          "https://ocarat.com/257052-large_default/montre-connectee-lotus-smartime-500021-lotus.jpg",
        favori: false,
      },

      {
        id: 11,
        nom: "Montre Boss Integrity Noire",
        prix: 75,
        imgUrl:
          "https://www.marc-orian.com/dw/image/v2/BCQS_PRD/on/demandware.static/-/Sites-THOM_CATALOG/default/dw9598df7c/images/HIMHN1N476-view1.jpg?sw=1024&sh=1024",
        favori: false,
      },

      {
        id: 12,
        nom: "Montre homme Diesel en acier noir",
        prix: 125,
        imgUrl:
          "https://www.cleor.com/media/catalog/product/cache/98234b6f098e120d7f728f93649aac55/d/z/dz4283_010_bijcrpbl97pknxik.jpg",
        favori: false,
      },
    ],
  },
  mutations: {
    LIKER(state, id) {
      console.log(state.listeArticles[id - 1]);
      state.listeArticles[id - 1].favori = !state.listeArticles[id - 1].favori;
    },
  },
  actions: {
    liker({ commit }, id) {
      commit("LIKER", id);
    },
  },
  modules: {},
});
