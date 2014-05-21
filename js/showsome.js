function showSome(root){
      // Initialize the display to show some nodes
		      
            root.children.forEach(toggleAll);
         
            //      s1           f2          f3         f4          f5          f6           f7         f8        L249       L250
            toggle(root.children[0]);
            toggle(root.children[0].children[0]);
            toggle(root.children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0]);

            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0]);  //N256
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[1]);
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[0]);   //N251        
            
                       
            //      s1           f2          f3         f4          f5          f6           f7         f9          L225      L226
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[1]);            
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[0]);  
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[0]);  
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0]);  //N232
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[1]); 
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[1].children[0]);  //N227
            
            //      s1           f2          f3         f4          f5          f6           f7        L237          L238     
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[2]);            
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[2].children[0]);  
             toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[2].children[0].children[0]); 
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[0].children[2].children[1]);  
            
            //      s1           f2          f3         f4          f5          f6         L261        L262       
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[1]);            
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[1].children[0]);  
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[0]); 
            toggle(root.children[0].children[0].children[0].children[0].children[0].children[1].children[1]); 
                       
             //      s1           f2          f3         f4          f5          f10        f11         f12       F13         L321
            toggle(root.children[0].children[0].children[0].children[0].children[1]);
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[0]);            
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[0].children[0]);  
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0]); 
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0]); 
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0]); 
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0]); 
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[1]); 
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[1]); 
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[1].children[0]); 
            
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[0].children[1]);  
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[0].children[1].children[0]); 
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[0].children[2]); 
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[0].children[2].children[0]); 

            
             //      s1           f2          f3         f4          f5          f10       L273         L274       L275        L276
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[1]); 
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[1].children[0]); 
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[0]); 
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[0]); 
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[0]); //N292
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[1]); 
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[1]); 
            toggle(root.children[0].children[0].children[0].children[0].children[1].children[1].children[1]);
            
             
            toggle(root.children[0].children[0].children[0].children[1]);
            toggle(root.children[0].children[0].children[0].children[2]);
            toggle(root.children[0].children[0].children[0].children[2].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0].children[0].children[1]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0].children[1]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0].children[1].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[1]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[0].children[1]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[0].children[1].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[1]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[1].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[1].children[1]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[1].children[1].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[1].children[2]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[1].children[2].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[1].children[2].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[1].children[2].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[1].children[2].children[0].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[1].children[2].children[0].children[0].children[1]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[1].children[2].children[0].children[1]);
            toggle(root.children[0].children[0].children[0].children[2].children[0].children[1].children[2].children[1]);
            toggle(root.children[0].children[0].children[0].children[2].children[1]);
            toggle(root.children[0].children[0].children[0].children[2].children[1].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[1].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[1].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[1].children[0].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[0].children[2].children[1].children[0].children[0].children[1]);
            toggle(root.children[0].children[0].children[0].children[2].children[1].children[0].children[1]);
            toggle(root.children[0].children[0].children[0].children[2].children[1].children[1]);
            
            
            
            //      s1           f2          f3         L507
            toggle(root.children[0].children[0].children[1]);
            toggle(root.children[0].children[0].children[1].children[0]);
            toggle(root.children[0].children[0].children[1].children[0].children[0]);
            toggle(root.children[0].children[0].children[1].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[1].children[0].children[0].children[0].children[0]);
            toggle(root.children[0].children[0].children[1].children[0].children[0].children[1]);
            toggle(root.children[0].children[0].children[1].children[0].children[1]);
            toggle(root.children[0].children[0].children[1].children[1]);		
            
}