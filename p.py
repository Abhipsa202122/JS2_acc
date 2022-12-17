a={"Max":101,"Sunil":102,"David":103,"JD":104}
print(a)
print(len(a))
sum=0
for i in a:
    if type(a[i])==int:
        sum+=a[i]
        print("total values", sum)
    else:
        print("key",i)    
