trigger OrderTrigger on Order__c (before insert) {
    for(Order__c o : Trigger.new){
        if(o.Status__c == null){
            o.Status__c = 'Draft';
        }
    }
}
