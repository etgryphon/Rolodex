// ==========================================================================
// Project:   Rolodex.contactsController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Rolodex */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Rolodex.contactsController = SC.ArrayController.create(
/** @scope Rolodex.contactsController.prototype */ {

  contentBinding: SC.Binding.from('Rolodex.groupController.contacts').oneWay(),
  selection: null

}) ;
