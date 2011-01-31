// ==========================================================================
// Project:   Rolodex.ContactDetailsView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Rolodex */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Rolodex.ContactDetailsView = SC.View.extend( SC.ContentDisplay,
/** @scope AddressBook.ContactDetailsView.prototype */ {
  content: null,
  displayProperties: 'content'.w(),
  contentDisplayProperties: 'firstName lastName phoneNumber'.w(),
  
  render: function(context, firstTime){
    var addrs, comp, c = this.get('content');
    if (c){
      context = context.begin('span').addClass('firstName').text(c.get('firstName')).end();
      context = context.begin('span').addClass('lastName').text(c.get('lastName')).end();
      context = context.begin('span').addClass('phone').text(c.get('phoneNumber')).end();
    }
  }

});
