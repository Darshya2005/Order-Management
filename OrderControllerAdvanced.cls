public with sharing class OrderControllerAdvanced {

    @AuraEnabled(cacheable=true)
    public static List<Product__c> getProducts() {
        return [SELECT Id, Name, Price__c FROM Product__c LIMIT 50];
    }

    @AuraEnabled
    public static Id createOrderWithItems(List<Id> productIds) {
        Order__c ord = new Order__c(Name='New Order', Status__c='Draft');
        insert ord;

        List<Order_Item__c> items = new List<Order_Item__c>();
        for(Id pid : productIds){
            items.add(new Order_Item__c(
                Order__c = ord.Id,
                Product__c = pid
            ));
        }
        insert items;

        return ord.Id;
    }
}
