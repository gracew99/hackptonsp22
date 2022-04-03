from hatesonar import Sonar
import sys

# print('#Hello from python#')
# print('First param:'+sys.argv[1]+'#')
sonar = Sonar()
print(sonar.ping(text=sys.argv[1])["top_class"])