import bcrypt from 'bcrypt';

/**
 * Hash a given password.
 * @param {string} password - Password to hash.
 * @returns {Promise<string>} Password's hash.
 */
export async function hashPassword(pass: string): Promise<string> {
    return await bcrypt.hash(pass, 10);
}

/**
 * Compare a given password with some hash.
 * @param {string} password - Password to compare.
 * @param {string} hash - Hash to compare.
 * @returns {Promise<boolean>} Result of comparison .
 */
export async function comparePassword(pass: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(pass, hash);
}