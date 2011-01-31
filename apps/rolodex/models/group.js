// ==========================================================================
// Project:   Rolodex.Group
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Rolodex */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Rolodex.Group = SC.Record.extend(
/** @scope Rolodex.Group.prototype */ {

  name: SC.Record.attr(String, { isRequired: YES, defaultValue: 'Group Name' }),
  contacts: SC.Record.toMany('Rolodex.Contact', {
    inverse: 'group', // set the key used to represent the inverse 
    isMaster: YES // indicate whether changing this should dirty
  })
  
}) ;
