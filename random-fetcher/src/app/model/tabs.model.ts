export interface TabsBehavior {
    add: (tab: TabBehavior) => void
    tabs: []
  }

  export interface TabBehavior {
    active: boolean
    tabs: []
  }