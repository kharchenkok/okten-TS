const container = document.getElementById('container-js');

const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit',0);

fetch(url)
    .then(res => res.json())
    .then( ({recipes}) => {
        console.log('recipes',recipes)  ;
        const recipesList = document.createElement('ul');
        recipesList.classList.add('recipes-list');
        recipes.forEach(recipe => {
            const itemMarkup = `
                <li class="recipes-item">
                     <div class="img-wrapper">
                            <img src="${recipe.image}" alt="${recipe.name}" width="250" height="350">
                      </div>
                    <div  class="details-wrapper">
                        <div class="info-wrapper">
                            <h2>${recipe.name}</h2>
                            <div class="info-prep">
                                <p><i class="fa-solid fa-hourglass-start"></i>${recipe.prepTimeMinutes} min</p>
                                <p><i class="fa-solid fa-fire"></i>${recipe.cookTimeMinutes} min</p>     
                                <p><i class="fa-solid fa-users"></i>${recipe.servings}</p>  
                                <p><i class="fa-solid fa-hamburger"></i> Calories per serving: ${recipe.caloriesPerServing}</p>   
                                <p><i class="fa-solid fa-gears"></i>${recipe.difficulty}</p>     
                            </div>
                           <div class="info-prep">
                               <p><i class="fa-solid fa-globe"></i> Cuisine: ${recipe.cuisine}</p>
                               <p><i class="fa-solid fa-utensils"></i> Meal type: 
                                    ${recipe.mealType.map(type=>`
                                   <span>${type}</span>
                                   `).join(',')}
                               </p>                                        
                           </div>
                           <div class="info-prep">
                               <p><i class="fa-solid fa-user"></i> Added by: User ${recipe.userId}</p>
                               <p><i class="fa-solid fa-star"></i> ${recipe.rating}</p>                                        
                               <p><i class="fa-solid fa-comment"></i> ${recipe.reviewCount}</p>                                        
                           </div>                       
                           <div class="info-prep">
                                Tags:
                                ${recipe.tags.map(tag=>`
                                  <a class="tag-link" href="#">${tag}</a>
                                   `).join('')}
                           </div>
                        </div>
                        <div class="cooking-wrapper">
                            <div class="ingredients-wrapper">
                                <h3>Ingredients:</h3>
                                <ul class="ingredients-list">
                                    ${recipe.ingredients.map(ingredient=>`
                                      <li><i class="fa-solid fa-square-check"></i>${ingredient}</li>
                                       `).join('')}
                                </ul>
                            </div>
                            <div class="instructions-wrapper">
                                <h3>Instructions:</h3>
                                <ul class="instructions-list">
                                    ${recipe.instructions.map(instruction=>`
                                      <li>${instruction}</li>
                                       `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>`

            recipesList.insertAdjacentHTML('beforeend',itemMarkup);
        })

        container.appendChild(recipesList);
        container.normalize();

});



