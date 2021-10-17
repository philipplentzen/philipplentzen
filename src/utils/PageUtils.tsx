import * as _ from "lodash"

export class PageUtils {
  public static removeClassesFromBody(classes: string[]): string[] {
    return _.without(classes, "home", "about")
  }
}
