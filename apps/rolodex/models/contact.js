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
  displayName: function(key, value){
    var fn, ln, fullName;
    if (value !== undefined){
      fullName = value.split(',') || [];
      ln = fullName[0].trim();
      this.set('lastName', ln);
      if (fullName.length > 0){
        fn = fullName[1].trim();
        this.set('firstName', fn);
      }
    }
    else {
      fn = this.get('firstName');
      ln = this.get('lastName');
      value = "%@, %@".fmt((ln || ''), (fn || ''));
    }
    
    return value;    
  }.property('firstName', 'lastName').cacheable()
  

}) ;
