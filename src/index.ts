
import { Config } from './models/config.model'

export class Polygraph {
  protected _wrapper: Element
  protected _config: Config
  protected _text: string[]

  constructor(
    wrapper: Element, 
    text?: string[],
    config?: Config
  ) {
    this._wrapper = wrapper
    this._text = text
    this._config = config
  }

  public get config(): Config {
    return this._config
  }

  public get text(): string[] {
    return this._text
  }

  public get raw(): string {
    return this._text
      .join(` `)
      .replace(/(\r\n|\n|\r)/gm, ``)
      .trim()
  }

  public get wrapper(): Element {
    return this._wrapper
  }
}