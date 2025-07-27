import bcrypt from 'bcrypt';

/**
 * Hash a given password.
 * @param {string} password - Password to hash.
 * @returns {Promise<string>} Password's hash.
 */
export async function hashPassword(pass: string): Promise<string> {
    return await bcrypt.hash(pass, 10);
}

export async function comparePassword(pass: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(pass, hash);
}