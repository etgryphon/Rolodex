// ==========================================================================
// Project:   Rolodex.Contact
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Rolodex */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Rolodex.Contact = SC.Record.extend(
/** @scope Rolodex.Contact.prototype */ {
  group: SC.Record.toOne('Rolodex.Group'),
  firstName: SC.Record.attr(String, { defaultValue: 'First' }),
  lastName: SC.Record.attr(String, { defaultValue: 'Last' }),
  phoneNumber: SC.Record.attr(String, { defaultValue: '555.555.5555' }),
  // Computed Properties
  displayName: function(){
    var fn = this.get('firstName'), 
        ln = this.get('lastName'), 
        dn, cn;
    if (fn || ln){
      dn = "%@, %@".fmt((ln || ''), (fn || ''));
    }
    return dn;    
  }.property('firstName', 'lastName').cacheable()
  

}) ;
