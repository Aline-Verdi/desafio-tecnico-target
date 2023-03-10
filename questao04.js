// a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

tempo = distancia / velocidade
tempo = 100 km / 110 km/h
tempo = 0,909 horas (ou 54,54 minutos)

// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

tempo = distancia / velocidade
tempo = 100 km / 80 km/h
tempo = 1,25 horas (ou 75 minutos)

// No entanto, como o caminhão leva 5 minutos a mais em cada um dos pedágios, precisamos adicionar 10 minutos (ou 0,166 horas) 
// ao tempo total de percurso do caminhão:

tempo total caminhao = tempo caminhao + 2 x 0,083 horas (5 minutos)
tempo total caminhao = 1,25 horas + 2 x 0,083 horas
tempo total caminhao = 1,416 horas (ou 85 minutos)

// c) Explique como chegou no resultado.

// O carro percorre uma distância igual a sua velocidade multiplicada pelo tempo que leva para percorrer essa distância:

distancia carro = velocidade carro x tempo carro
distancia carro = 110 km/h x 0,909 horas
distancia carro = 100 km

// Já o caminhão percorre uma distância igual a sua velocidade multiplicada pelo tempo que leva para percorrer essa distância, 
// acrescida dos 5 minutos extras que leva em cada pedágio:

distancia caminhao = velocidade caminhao x tempo total caminhao
distancia caminhao = 80 km/h x 1,416 horas
distancia caminhao = 113,28 km

// Portanto, quando os dois veículos se encontrarem, o carro estará mais próximo de Ribeirão Preto, 
// pois terá percorrido exatamente a distância entre as duas cidades (100 km), enquanto o caminhão terá percorrido uma distância maior (113,28 km).