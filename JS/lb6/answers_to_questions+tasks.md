## Теоретический вопрос

1. Опишите своими словами как работает цикл forEach.

Цей цикл перебирає кожне значення масиву, один за одним. В масиві кожне значення обробляється функцією callback. Ця функція може викликатись в будь-який момент або за будь-якої умови.

## Задание

Реализовать функцию фильтра массива по указанному типу данных.

#### Технические требования:
- Написать функцию `filterBy()`, которая будет принимать в себя 2 аргумента. Первый аргумент - массив, который будет содержать в себе любые данные, второй аргумент - тип данных.
- Функция должна вернуть новый массив, который будет содержать в себе все данные, которые были переданы в аргумент, за исключением тех, тип которых был передан вторым аргументом. То есть, если передать массив ['hello', 'world', 23, '23', null], и вторым аргументом передать 'string', то функция вернет массив [23, null]. 

#### Литература:
- [Массивы с числовыми индексами](http://learn.javascript.ru/array)
- [Массив: перебирающие методы](http://learn.javascript.ru/array-iteration)
- [Шесть типов данных, typeof](https://learn.javascript.ru/types-intro)