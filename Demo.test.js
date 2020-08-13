import { runCallback, createObject } from './Demo'
 test('测试', () => {
   const func = jest.fn();
   func.mockReturnValueOnce('yky').mockReturnValueOnce('123');
   runCallback(func);
   runCallback(func);
   expect(func.mock.calls.length).toBe(2);
   console.log(func.mock);
 })

 test('测试 createObject', () => {
   const func = jest.fn();
   createObject(func);
   console.log(func.mock);
 })