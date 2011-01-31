// ==========================================================================
// Project:   Rolodex - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Rolodex */

// This page describes the main user interface for your application.  
Rolodex.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'groupLabel groupList nameLabel nameList detailsLabel detailsView'.w(),
    
    groupLabel: SC.LabelView.design({
      classNames: ['big-label'],
      layout: { left: 0, top: 0, minWidth: 259, width: 0.25, height: 44 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Group"
    }),
    
    groupList: SC.ListView.design({
      classNames: ['master-list'],
      layout: { left: 0, top: 56, minWidth: 259, width: 0.25, bottom: 36 },
      rowHeight: 43,
      rowSpacing: 2,
      canEditContent: YES,
      selectionBinding: SC.Binding.from('Rolodex.groupsController.selection'),
      contentBinding: SC.Binding.from('Rolodex.groupsController'),
      contentValueKey: 'name'
    }),
        
    nameLabel: SC.LabelView.design({
      classNames: ['big-label'],
      layout: { left: 0.25, top: 0, minWidth: 259, width: 0.25, height: 44 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Name"
    }),
    
    nameList: SC.ListView.design({
      classNames: ['master-list'],
      layout: { left: 0.25, top: 56, minWidth: 259, width: 0.25, bottom: 36 },
      rowHeight: 43,
      rowSpacing: 2,
      canEditContent: YES,
      selectionBinding: SC.Binding.from('Rolodex.contactsController.selection'),
      contentBinding: SC.Binding.from('Rolodex.contactsController'),
      contentValueKey: 'displayName'
    }),
        
    detailsLabel: SC.LabelView.design({
      classNames: ['big-label'],
      layout: { left: 0.5, top: 0, minWidth: 259, width: 0.5, height: 44 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Details"
    }),
    
    detailsView: Rolodex.ContactDetailsView.design({
      classNames: ['details'],
      layout: { left: 0.5, top: 56, minWidth: 259, width: 0.5, bottom: 36 },
      contentBinding: SC.Binding.from('Rolodex.contactController').oneWay()
    })
  })

});
