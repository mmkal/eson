type Replacer =
  | ((val: any) => any)
  | (string | number)[]

interface StringifyOptions {
  replacer?: 
    | ((val: any) => any)
    | (string | number)[]
    | null
  space?: string | number
  quote?: string
}

export declare const stringify: {
  (value: unknown, replacer?: StringifyOptions['replacer'], space?: StringifyOptions['space']): string
  (value: unknown, options: StringifyOptions): string
}
export declare const parse: (
  value: string,
  reviver?: (key: string, value: any) => any
) => any
