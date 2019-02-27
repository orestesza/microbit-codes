#六合彩心水号码

import random

Numlist = []
while len(Numlist) <= 5:
    #print(Numlist)
    a = random.randint(1, 42)
    if a not in Numlist:
        Numlist.append(a)
Numlist.sort()
print(Numlist)
