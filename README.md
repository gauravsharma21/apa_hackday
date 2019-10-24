# apa_hackday
This is an android app to be used by commuters travelling near accident prone areas. They will be notified once they reach about 500 m near a black spot. Policemen can login using their PIS number (which is unique for every policman) and can enter the location of a place where accident took place using GPS. The severity of accidents on a particular black spot is done using a Machine learning classification algorithm and represented using green, orange and red colour.
.

The backend is ready and hosted on https://apaserver.herokuapp.com/

1. /login - To login user
2. /info - To get dummy database containing police info
3. /spots/add - Add a new black spot
4. /spots - Get all the blackspots
