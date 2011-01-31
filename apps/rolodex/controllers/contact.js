// ==========================================================================
// Project:   Rolodex.contactController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Rolodex */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Rolodex.contactController = SC.ObjectController.create(
/** @scope Rolodex.contactController.prototype */ {

  contentBinding: SC.Binding.from('Rolodex.contactsController.selection').oneWay().single()

}) ;
