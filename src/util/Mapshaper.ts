// @ts-ignore
import mapshaper from "mapshaper";

export default function Mapshaper(command: string): Promise<Error> {
  return new Promise(r => {
    mapshaper.runCommands(command, r);
  });
}