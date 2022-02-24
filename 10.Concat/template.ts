type Equal<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false
//type Includes<T extends readonly unknown[], U> = U extends T[number]?true:false;

//type a =Includes<[boolean, 2, 3, 5, 6, 7], false>

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? Equal<First, U> extends true ? true : Includes<Rest, U> : false;