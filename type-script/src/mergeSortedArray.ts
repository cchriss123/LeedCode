


function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m, nums1.length - m)
    nums1.push(...nums2)
    nums1.sort((a, b) => a - b)
}






