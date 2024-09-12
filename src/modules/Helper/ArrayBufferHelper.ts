export class ArrayBufferHelper {
  /**
   * ArrayBuffer转16进制字符串数组
   * @param buffer ArrayBuffer
   * @returns Array<string>
   */
  arrayBuffer2HexArray(buffer: ArrayBuffer): string[] {
    const hexArr = Array.prototype.map.call(new Uint8Array(buffer), (bit) => ('00' + bit.toString(16)).slice(-2));
    return hexArr as string[];
  }

  /**
   * ArrayBuffer转16进制字符串
   * @param buffer ArrayBuffer
   * @returns string
   */
  arrayBuffer2Hex(buffer: ArrayBuffer): string {
    return this.arrayBuffer2HexArray(buffer).join('');
  }
}

export default ArrayBufferHelper;
