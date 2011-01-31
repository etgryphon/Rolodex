// ==========================================================================
// Project:   Rolodex.groupController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Rolodex */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Rolodex.groupController = SC.ObjectController.create(
/** @scope Rolodex.groupController.prototype */ {

  contentBinding: SC.Binding.from('Rolodex.groupsController.selection').oneWay().single()

}) ;
