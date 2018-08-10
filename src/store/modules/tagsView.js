const tagsView = {
  state: {
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    ADD_VISITED_VIEWS: (state, view) => {
      if (state.visitedViews.some(v => v.path === view.path)) return
      // 没有菜单的路由link指向父菜单，显示父菜单
      if (view.meta.link) {
        if (!state.visitedViews.length) {
          state.visitedViews.push({
            name: view.name,
            path: view.meta.link,
            metaLink: view.meta.link,
            current: view.meta.current,
            title: view.meta.title || 'no-name'
          })
        }
        return
      }
      // if (state.visitedViews.some(v => v.path === view.meta.link)) return
      state.visitedViews.push({
        name: view.name,
        path: view.path,
        current: view.meta.current,
        metaLink: view.meta.link,
        title: view.meta.title || 'no-name'
      })
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name)
      }
      // 最多显示6个菜单
      if (state.visitedViews.length > 6) {
        if (state.visitedViews[0].path !== view.path) {
          state.visitedViews.splice(0, 1)
          state.cachedViews.splice(0, 1)
        } else {
          state.visitedViews.splice(1, 1)
          state.cachedViews.splice(1, 1)
        }
      }
    },
    DEL_VISITED_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path || view.path.indexOf('edit') > -1) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews.splice(index, 1)
          break
        }
      }
    },
    DEL_OTHERS_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews = state.visitedViews.slice(i, i + 1)
          break
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews = state.cachedViews.slice(index, i + 1)
          break
        }
      }
    },
    DEL_ALL_VIEWS: (state) => {
      state.visitedViews = []
      state.cachedViews = []
    }
  },
  actions: {
    addVisitedViews ({ commit }, view) {
      commit('ADD_VISITED_VIEWS', view)
    },
    delVisitedViews ({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('DEL_VISITED_VIEWS', view)
        resolve([...state.visitedViews])
      })
    },
    delOthersViews ({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('DEL_OTHERS_VIEWS', view)
        resolve([...state.visitedViews])
      })
    },
    delAllViews ({ commit, state }) {
      return new Promise((resolve) => {
        commit('DEL_ALL_VIEWS')
        resolve([...state.visitedViews])
      })
    }
  }
}

export default tagsView
