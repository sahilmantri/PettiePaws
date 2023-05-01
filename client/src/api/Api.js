import axios from "axios";
//{"_id":1,"title":"Golden Retriver","isNew":true,"oldPrice":"19000","price":15000,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.","gender":"Male","image":"/assets/dog1.jpeg","rating":4},

export async function productsData() {

  const products = {data: [
    {"_id":1,"title":"Australian Shepherd","isNew":true,"oldPrice":"85000","price":60000,"description":"The Australian Shepherd, a lean, tough ranch dog, is one of those 'only in America' stories: a European breed perfected in California by way of Australia. Fixtures on the rodeo circuit, they are closely associated with the cowboy life. ","gender":"Male","image":"/assets/dog6.avif","rating":4},
    {"_id":2,"title":"Labrodog","isNew":true,"oldPrice":"20000","price":17000,"description":"The sweet-faced, lovable Labrador Retriever is America's most popular dog breed. Labs are friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog.","gender":"Male","image":"/assets/dog2.jpg","rating":4},
    {"_id":3,"title":"Beagle","isNew":true,"oldPrice":"15000","price":12000,"description":"Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky, funny, and thanks to its pleading expression cute.They come in such pleasing colors as lemon, red and white, and tricolor. The Beagle's fortune is in his adorable face, with its big brown or hazel eyes set off by long, houndy ears set low on a broad head. A breed described as 'merry' by its fanciers, Beagles are loving and lovable, happy, and companionable all qualities that make them excellent family dogs.","gender":"Female","image":"/assets/dog3.jpg","rating":4},
    {"_id":4,"title":"Samoyed","isNew":true,"oldPrice":"130000","price":90000,"description":"The Samoyed is a substantial but graceful dog standing anywhere from 19 to a bit over 23 inches at the shoulder. Powerful, tireless, with a thick all-white coat impervious to cold, Sammies are perfectly beautiful but highly functional. Even their most delightful feature, a perpetual smile, has a practical function: The upturned corners of the mouth keep Sammies from drooling, preventing icicles from forming on the face","gender":"Female","image":"/assets/dog4.jpeg","rating":4.7},
    
    {"_id":5,"title":"British shorthair","isNew":true,"oldPrice":"150000","price":10000,"description":"The British Shorthair is a medium to large sized, compact, chunky cat, known for their attractive features and thick, plush fur. Short coupled and robust, the British Shorthair is instantly recognisable by their rounded face and large round eyes, giving this cat an adorable expression and bags of character.","gender":"Male","image":"/assets/cat1.jpeg","rating":4},
    {"_id":6,"title":"Maine coon","isNew":true,"oldPrice":"50000","price":35000,"description":"The Maine Coon has a muscular, long, rectangular body with a broad chest. It has large, round paws with tufts of hair sticking up from the toes. The head is slightly longer in length than width, with high cheekbones, a distinctive square muzzle and large, well-tufted ears.","gender":"Female","image":"/assets/cat2.jpeg","rating":4},
    {"_id":7,"title":"Persian","isNew":true,"oldPrice":"20000","price":15000,"description":"Persian cats are medium-sized, usually weigh between seven and 12 pounds, and measure from 10-15 inches tall. They have a rounded head, small, rounded ears, and big eyes. They also typically have a flat and pushed-in looking face with chubby cheeks.","gender":"Female","image":"/assets/cat3.jpeg","rating":4},
    {"_id":8,"title":"Ragdoll","isNew":true,"oldPrice":"35000","price":20000,"description":"The Ragdoll is a breed of cat with a distinct colorpoint coat and blue eyes. Its morphology is large and weighty, and it has a semi-long and silky soft coat. American breeder Ann Baker developed Ragdolls in the 1960s. They are best known for their docile, placid temperament and affectionate nature.","gender":"Male","image":"/assets/cat4.jpeg","rating":4},
    
    {"_id":9,"title":"Tug-a-ball Dog Toy","isNew":true,"oldPrice":"1000","price":800,"description":"Interactive Dog toy.","gender":"Red/Cyan","image":"/assets/Toy1.webp","rating":4},
    {"_id":10,"title":"Dog Chew Toy","isNew":true,"oldPrice":"950","price":650,"description":"Non-toxic,durable,led-free dog toy. ","gender":"Red","image":"/assets/Toy2.webp","rating":4},
    {"_id":11,"title":"Hide-n-Seek Dog Toy","isNew":true,"oldPrice":"3500","price":2500,"description":"Non-toxic,Easy Maintanence & Food Safe.","gender":"Purple","image":"/assets/Toy3.webp","rating":4},
    {"_id":12,"title":"Stuffed Toy","isNew":true,"oldPrice":"850","price":600,"description":"Soft, easy to play stuffed toy.","gender":"Ice-Cream","image":"/assets/Toy4.webp","rating":4.7},
    {"_id":13,"title":"Flower Shower Wand Toy For Cats","isNew":true,"oldPrice":"500","price":400,"description":"Safe, engaging & lightweight.","gender":"Pink","image":"/assets/Toy5.webp","rating":4},
    {"_id":14,"title":"Trixie Playing Rod with Feathers","isNew":true,"oldPrice":"250","price":120,"description":"Interactive, engaging & lightweight","gender":"Feather","image":"/assets/Toy6.webp","rating":4},
    {"_id":15,"title":"Petstages Catnip Chaser Cat Toy","isNew":true,"oldPrice":"1500","price":1000,"description":"Anti-skid, easy to use & clean ","gender":"Green/Cyan","image":"/assets/Toy7.webp","rating":4},
    {"_id":16,"title":"Trixie Filippo Cat Scratching Post - 45 inch","isNew":true,"oldPrice":"28000","price":26000,"description":"Natural, padded, comfortable & easy to use ","gender":"Black","image":"/assets/Toy8.webp","rating":4},
    
  ]}
  
  return products;
}

export async function productsData2() {

  const products = {data: [
    {"_id":1,"title":"British shorthair","isNew":true,"oldPrice":"150000","price":10000,"description":"The British Shorthair is a medium to large sized, compact, chunky cat, known for their attractive features and thick, plush fur. Short coupled and robust, the British Shorthair is instantly recognisable by their rounded face and large round eyes, giving this cat an adorable expression and bags of character.","gender":"Male","image":"/assets/cat1.jpeg","rating":4},
    {"_id":2,"title":"Maine coon","isNew":true,"oldPrice":"50000","price":35000,"description":"The Maine Coon has a muscular, long, rectangular body with a broad chest. It has large, round paws with tufts of hair sticking up from the toes. The head is slightly longer in length than width, with high cheekbones, a distinctive square muzzle and large, well-tufted ears.","gender":"Female","image":"/assets/cat2.jpeg","rating":4},
    {"_id":3,"title":"Persian","isNew":true,"oldPrice":"20000","price":15000,"description":"Persian cats are medium-sized, usually weigh between seven and 12 pounds, and measure from 10-15 inches tall. They have a rounded head, small, rounded ears, and big eyes. They also typically have a flat and pushed-in looking face with chubby cheeks.","gender":"Female","image":"/assets/cat3.jpeg","rating":4},
    {"_id":4,"title":"Ragdoll","isNew":true,"oldPrice":"35000","price":20000,"description":"The Ragdoll is a breed of cat with a distinct colorpoint coat and blue eyes. Its morphology is large and weighty, and it has a semi-long and silky soft coat. American breeder Ann Baker developed Ragdolls in the 1960s. They are best known for their docile, placid temperament and affectionate nature.","gender":"Male","image":"/assets/cat4.jpeg","rating":4},
    {"_id":2,"title":"Maine coon","isNew":true,"oldPrice":"50000","price":35000,"description":"The Maine Coon has a muscular, long, rectangular body with a broad chest. It has large, round paws with tufts of hair sticking up from the toes. The head is slightly longer in length than width, with high cheekbones, a distinctive square muzzle and large, well-tufted ears.","gender":"Female","image":"/assets/cat2.jpeg","rating":4},
    {"_id":6,"title":"Persian","isNew":true,"oldPrice":"20000","price":15000,"description":"Persian cats are medium-sized, usually weigh between seven and 12 pounds, and measure from 10-15 inches tall. They have a rounded head, small, rounded ears, and big eyes. They also typically have a flat and pushed-in looking face with chubby cheeks.","gender":"Female","image":"/assets/cat3.jpeg","rating":4},
    {"_id":2,"title":"Maine coon","isNew":true,"oldPrice":"50000","price":35000,"description":"The Maine Coon has a muscular, long, rectangular body with a broad chest. It has large, round paws with tufts of hair sticking up from the toes. The head is slightly longer in length than width, with high cheekbones, a distinctive square muzzle and large, well-tufted ears.","gender":"Female","image":"/assets/cat2.jpeg","rating":4},
    {"_id":7,"title":"Persian","isNew":true,"oldPrice":"20000","price":15000,"description":"Persian cats are medium-sized, usually weigh between seven and 12 pounds, and measure from 10-15 inches tall. They have a rounded head, small, rounded ears, and big eyes. They also typically have a flat and pushed-in looking face with chubby cheeks.","gender":"Female","image":"/assets/cat3.jpeg","rating":4},
    
 
 
  ]}
  
  return products;
}

export async function productsData3() {

  const products = {data: [
    {"_id":1,"title":"Golden Retriver","isNew":true,"oldPrice":"19000","price":15000,"description":"The Golden Retriever, an exuberant Scottish gundog of great beauty, stands among America's most popular dog breeds. They are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue, enjoy obedience and other competitive events, and have an endearing love of life when not at work. ","gender":"Male","image":"/assets/dog1.jpeg","rating":4},
    {"_id":2,"title":"Labrodog","isNew":true,"oldPrice":"20000","price":17000,"description":"The sweet-faced, lovable Labrador Retriever is America's most popular dog breed. Labs are friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog. ","gender":"Male","image":"/assets/dog2.jpg","rating":4},
    {"_id":3,"title":"Beagle","isNew":true,"oldPrice":"15000","price":12000,"description":"Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky, funny, and thanks to its pleading expression cute.They come in such pleasing colors as lemon, red and white, and tricolor. The Beagle's fortune is in his adorable face, with its big brown or hazel eyes set off by long, houndy ears set low on a broad head. A breed described as 'merry' by its fanciers, Beagles are loving and lovable, happy, and companionable all qualities that make them excellent family dogs.","gender":"Female","image":"/assets/dog3.jpg","rating":4},
    {"_id":4,"title":"Samoyed","isNew":true,"oldPrice":"130000","price":90000,"description":"The Samoyed is a substantial but graceful dog standing anywhere from 19 to a bit over 23 inches at the shoulder. Powerful, tireless, with a thick all-white coat impervious to cold, Sammies are perfectly beautiful but highly functional. Even their most delightful feature, a perpetual smile, has a practical function: The upturned corners of the mouth keep Sammies from drooling, preventing icicles from forming on the face","gender":"Female","image":"/assets/dog4.jpeg","rating":4.7},
    {"_id":5,"title":"Husky","isNew":true,"oldPrice":"20000","price":18000,"description":"Siberian Husky, a thickly coated, compact sled dog of medium size and great endurance, was developed to work in packs, pulling light loads at moderate speeds over vast frozen expanses. Sibes are friendly, fastidious, and dignified.","gender":"Male","image":"/assets/dog5.jpeg","rating":4},
    {"_id":6,"title":"Australian Shepherd","isNew":true,"oldPrice":"85000","price":60000,"description":"The Australian Shepherd, a lean, tough ranch dog, is one of those 'only in America' stories: a European breed perfected in California by way of Australia. Fixtures on the rodeo circuit, they are closely associated with the cowboy life. ","gender":"Male","image":"/assets/dog6.avif","rating":4},
    {"_id":7,"title":"Chihuahua","isNew":true,"oldPrice":"15000","price":10000,"description":"The Chihuahua is a tiny dog with a huge personality. A national symbol of Mexico, these alert and amusing 'purse dogs' stand among the oldest breeds of the Americas, with a lineage going back to the ancient kingdoms of pre-Columbian times. The Chihuahua is a balanced, graceful dog of terrier-like demeanor, weighing no more than 6 pounds. ","gender":"Male","image":"/assets/dog7.jpeg","rating":4},
    {"_id":8,"title":"Dalmatian","isNew":true,"oldPrice":"15000","price":6000,"description":"The dignified Dalmatian, dogdom's citizen of the world, is famed for his spotted coat and unique job description. During their long history, these 'coach dogs' have accompanied the horse-drawn rigs of nobles, gypsies, and firefighters. The Dalmatian's delightful, eye-catching spots of black or liver adorn one of the most distinctive coats in the animal kingdom. ","gender":"Male","image":"/assets/dog8.jpeg","rating":4},
    
  ]}
  
  return products;
}

export async function productsData4() {

  const products = {data: [
    {"_id":1,"title":"Tug-a-ball Dog Toy","isNew":true,"oldPrice":"1000","price":800,"description":"Interactive Dog toy.","gender":"Red/Cyan","image":"/assets/Toy1.webp","rating":4},
    {"_id":2,"title":"Dog Chew Toy","isNew":true,"oldPrice":"950","price":650,"description":"Non-toxic,durable,led-free dog toy. ","gender":"Red","image":"/assets/Toy2.webp","rating":4},
    {"_id":3,"title":"Hide-n-Seek Dog Toy","isNew":true,"oldPrice":"3500","price":2500,"description":"Non-toxic,Easy Maintanence & Food Safe.","gender":"Purple","image":"/assets/Toy3.webp","rating":4},
    {"_id":4,"title":"Stuffed Toy","isNew":true,"oldPrice":"850","price":600,"description":"Soft, easy to play stuffed toy.","gender":"Ice-Cream","image":"/assets/Toy4.webp","rating":4.7},
    {"_id":5,"title":"Flower Shower Wand Toy For Cats","isNew":true,"oldPrice":"500","price":400,"description":"Safe, engaging & lightweight.","gender":"Pink","image":"/assets/Toy5.webp","rating":4},
    {"_id":6,"title":"Trixie Playing Rod with Feathers","isNew":true,"oldPrice":"250","price":120,"description":"Interactive, engaging & lightweight","gender":"Feather","image":"/assets/Toy6.webp","rating":4},
    {"_id":7,"title":"Petstages Catnip Chaser Cat Toy","isNew":true,"oldPrice":"1500","price":1000,"description":"Anti-skid, easy to use & clean ","gender":"Green/Cyan","image":"/assets/Toy7.webp","rating":4},
    {"_id":8,"title":"Trixie Filippo Cat Scratching Post - 45 inch","isNew":true,"oldPrice":"28000","price":26000,"description":"Natural, padded, comfortable & easy to use ","gender":"Black","image":"/assets/Toy8.webp","rating":4},
    
  ]}
  
  return products;
}