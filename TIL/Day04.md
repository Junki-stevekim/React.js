### 👀Day04
---
1. 베이스 캠프
   - Props와 State의 차이점
  ![차이점](https://velog.velcdn.com/images/gwanuuoo/post/fc819807-f29d-47cd-8eae-b0242552a04a/img.png)
  - Components 안에서 Props 값을 바꾸는것은 금지 되어있다.
  ![](https://images.velog.io/images/jeromecheon/post/7fe57cd6-0e19-4141-b1bc-eadfc366ff61/1111.jpeg)
  - Props는 외부 속성값, State는 Component 안에 속성값 즉 구현자 입장에서의 상태값을 변경할수있다. -> React 개념의 핵심.
  - 하위 Component 에서 상위 Component의 Props를 변경하고싶으면 -> Event를 호출해서 State값을 변경한다.
  - Redux 의 개념 -> 저장소 하나를 만들어서, 저장소 값을 변경하면, 연관된 Component값이 변경되게 하는 구조.
---
### CRUD 구현.
---
1. Create 기능
   - 