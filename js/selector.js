// ========================================
// GLOBAL VARIABLES
// ========================================
// Agrega aquí los nombres de las fotos una vez que copies los .webp a la carpeta imagenes/
// Ejemplo: 'imagenes/DSC_0001.webp', 'imagenes/DSC_0002.webp', ...
const photos = [
    'imagenes/DJI_20250424180259_0041_D.webp',
    'imagenes/DJI_20250424180310_0042_D.webp',
    'imagenes/DJI_20250424180333_0043_D.webp',
    'imagenes/foto7_0001.webp',
    'imagenes/foto7_0002.webp',
    'imagenes/foto7_0003.webp',
    'imagenes/foto7_0004.webp',
    'imagenes/foto7_0005.webp',
    'imagenes/foto7_0006.webp',
    'imagenes/foto7_0007.webp',
    'imagenes/foto7_0008.webp',
    'imagenes/foto7_0009.webp',
    'imagenes/foto7_0010.webp',
    'imagenes/foto7_0012.webp',
    'imagenes/foto7_0013.webp',
    'imagenes/foto7_0014.webp',
    'imagenes/foto7_0015.webp',
    'imagenes/foto7_0016.webp',
    'imagenes/foto7_0017.webp',
    'imagenes/foto7_0018.webp',
    'imagenes/foto7_0019.webp',
    'imagenes/foto7_0020.webp',
    'imagenes/foto7_0022.webp',
    'imagenes/foto7_0023.webp',
    'imagenes/foto7_0024.webp',
    'imagenes/foto7_0025.webp',
    'imagenes/foto7_0026.webp',
    'imagenes/foto7_0028.webp',
    'imagenes/foto7_0029.webp',
    'imagenes/foto7_0030.webp',
    'imagenes/foto7_0031.webp',
    'imagenes/foto7_0032.webp',
    'imagenes/foto7_0033.webp',
    'imagenes/foto7_0034.webp',
    'imagenes/foto7_0035.webp',
    'imagenes/foto7_0036.webp',
    'imagenes/foto7_0037.webp',
    'imagenes/foto7_0038.webp',
    'imagenes/foto7_0039.webp',
    'imagenes/foto7_0040.webp',
    'imagenes/foto7_0041.webp',
    'imagenes/foto7_0044.webp',
    'imagenes/foto7_0046.webp',
    'imagenes/foto7_0047.webp',
    'imagenes/foto7_0048.webp',
    'imagenes/foto7_0049.webp',
    'imagenes/foto7_0050.webp',
    'imagenes/foto7_0051.webp',
    'imagenes/foto7_0052.webp',
    'imagenes/foto7_0053.webp',
    'imagenes/foto7_0054.webp',
    'imagenes/foto7_0055.webp',
    'imagenes/foto7_0056.webp',
    'imagenes/foto7_0057.webp',
    'imagenes/foto7_0058.webp',
    'imagenes/foto7_0059.webp',
    'imagenes/foto7_0060.webp',
    'imagenes/foto7_0061.webp',
    'imagenes/foto7_0062.webp',
    'imagenes/foto7_0063.webp',
    'imagenes/foto7_0064.webp',
    'imagenes/foto7_0065.webp',
    'imagenes/foto7_0066.webp',
    'imagenes/foto7_0067.webp',
    'imagenes/foto7_0068.webp',
    'imagenes/foto7_0069.webp',
    'imagenes/foto7_0070.webp',
    'imagenes/foto7_0071.webp',
    'imagenes/foto7_0072.webp',
    'imagenes/foto7_0073.webp',
    'imagenes/foto7_0074.webp',
    'imagenes/foto7_0075.webp',
    'imagenes/foto7_0076.webp',
    'imagenes/foto7_0077.webp',
    'imagenes/foto7_0078.webp',
    'imagenes/foto7_0079.webp',
    'imagenes/foto7_0080.webp',
    'imagenes/foto7_0081.webp',
    'imagenes/foto7_0082.webp',
    'imagenes/foto7_0083.webp',
    'imagenes/foto7_0084.webp',
    'imagenes/foto7_0085.webp',
    'imagenes/foto7_0086.webp',
    'imagenes/foto7_0087.webp',
    'imagenes/foto7_0088.webp',
    'imagenes/foto7_0090.webp',
    'imagenes/foto7_0091.webp',
    'imagenes/foto7_0092.webp',
    'imagenes/foto7_0093.webp',
    'imagenes/foto7_0094.webp',
    'imagenes/foto7_0095.webp',
    'imagenes/foto7_0096.webp',
    'imagenes/foto7_0097.webp',
    'imagenes/foto7_0098.webp',
    'imagenes/foto7_0099.webp',
    'imagenes/foto7_0100.webp',
    'imagenes/foto7_0101.webp',
    'imagenes/foto7_0102.webp',
    'imagenes/foto7_0103.webp',
    'imagenes/foto7_0104.webp',
    'imagenes/foto7_0105.webp',
    'imagenes/foto7_0106.webp',
    'imagenes/foto7_0107.webp',
    'imagenes/foto7_0108.webp',
    'imagenes/foto7_0109.webp',
    'imagenes/foto7_0110.webp',
    'imagenes/foto7_0111.webp',
    'imagenes/foto7_0112.webp',
    'imagenes/foto7_0113.webp',
    'imagenes/foto7_0114.webp',
    'imagenes/foto7_0115.webp',
    'imagenes/foto7_0116.webp',
    'imagenes/foto7_0117.webp',
    'imagenes/foto7_0118.webp',
    'imagenes/foto7_0119.webp',
    'imagenes/foto7_0120.webp',
    'imagenes/foto7_0121.webp',
    'imagenes/foto7_0122.webp',
    'imagenes/foto7_0123.webp',
    'imagenes/foto7_0124.webp',
    'imagenes/foto7_0125.webp',
    'imagenes/foto7_0126.webp',
    'imagenes/foto7_0127.webp',
    'imagenes/foto7_0128.webp',
    'imagenes/foto7_0129.webp',
    'imagenes/foto7_0130.webp',
    'imagenes/foto7_0131.webp',
    'imagenes/foto7_0132.webp',
    'imagenes/foto7_0133.webp',
    'imagenes/foto7_0134.webp',
    'imagenes/foto7_0135.webp',
    'imagenes/foto7_0136.webp',
    'imagenes/foto7_0137.webp',
    'imagenes/foto7_0138.webp',
    'imagenes/foto7_0139.webp',
    'imagenes/foto7_0140.webp',
    'imagenes/foto7_0141.webp',
    'imagenes/foto7_0142.webp',
    'imagenes/foto7_0143.webp',
    'imagenes/foto7_0144.webp',
    'imagenes/foto7_0145.webp',
    'imagenes/foto7_0146.webp',
    'imagenes/foto7_0147.webp',
    'imagenes/foto7_0149.webp',
    'imagenes/foto7_0150.webp',
    'imagenes/foto7_0151.webp',
    'imagenes/foto7_0152.webp',
    'imagenes/foto7_0153.webp',
    'imagenes/foto7_0154.webp',
    'imagenes/foto7_0155.webp',
    'imagenes/foto7_0156.webp',
    'imagenes/foto7_0157.webp',
    'imagenes/foto7_0158.webp',
    'imagenes/foto7_0159.webp',
    'imagenes/foto7_0160.webp',
    'imagenes/foto7_0161.webp',
    'imagenes/foto7_0162.webp',
    'imagenes/foto7_0163.webp',
    'imagenes/foto7_0164.webp',
    'imagenes/foto7_0165.webp',
    'imagenes/foto7_0166.webp',
    'imagenes/foto7_0167.webp',
    'imagenes/foto7_0168.webp',
    'imagenes/foto7_0169.webp',
    'imagenes/foto7_0170.webp',
    'imagenes/foto7_0171.webp',
    'imagenes/foto7_0172.webp',
    'imagenes/foto7_0173.webp',
    'imagenes/foto7_0174.webp',
    'imagenes/foto7_0175.webp',
    'imagenes/foto7_0176.webp',
    'imagenes/foto7_0177.webp',
    'imagenes/foto7_0178.webp',
    'imagenes/foto7_0179.webp',
    'imagenes/foto7_0180.webp',
    'imagenes/foto7_0181.webp',
    'imagenes/foto7_0182.webp',
    'imagenes/foto7_0183.webp',
    'imagenes/foto7_0184.webp',
    'imagenes/foto7_0185.webp',
    'imagenes/foto7_0186.webp',
    'imagenes/foto7_0187.webp',
    'imagenes/foto7_0188.webp',
    'imagenes/foto7_0189.webp',
    'imagenes/foto7_0190.webp',
    'imagenes/foto7_0191.webp',
    'imagenes/foto7_0192.webp',
    'imagenes/foto7_0193.webp',
    'imagenes/foto7_0194.webp',
    'imagenes/foto7_0195.webp',
    'imagenes/foto7_0196.webp',
    'imagenes/foto7_0197.webp',
    'imagenes/foto7_0198.webp',
    'imagenes/foto7_0199.webp',
    'imagenes/foto7_0200.webp',
    'imagenes/foto7_0201.webp',
    'imagenes/foto7_0202.webp',
    'imagenes/foto7_0203.webp',
    'imagenes/foto7_0204.webp',
    'imagenes/foto7_0205.webp',
    'imagenes/foto7_0206.webp',
    'imagenes/foto7_0207.webp',
    'imagenes/foto7_0208.webp',
    'imagenes/foto7_0209.webp',
    'imagenes/foto7_0210.webp',
    'imagenes/foto7_0211.webp',
    'imagenes/foto7_0212.webp',
    'imagenes/foto7_0213.webp',
    'imagenes/foto7_0214.webp',
    'imagenes/foto7_0215.webp',
    'imagenes/foto7_0216.webp',
    'imagenes/foto7_0217.webp',
    'imagenes/foto7_0218.webp',
    'imagenes/foto7_0219.webp',
    'imagenes/foto7_0220.webp',
    'imagenes/foto7_0221.webp',
    'imagenes/foto7_0222.webp',
    'imagenes/foto7_0223.webp',
    'imagenes/foto7_0224.webp',
    'imagenes/foto7_0225.webp',
    'imagenes/foto7_0226.webp',
    'imagenes/foto7_0229.webp',
    'imagenes/foto7_0230.webp',
    'imagenes/foto7_0231.webp',
    'imagenes/foto7_0232.webp',
    'imagenes/foto7_0233.webp',
    'imagenes/foto7_0234.webp',
    'imagenes/XV_Vale_001.webp',
    'imagenes/XV_Vale_005.webp',
    'imagenes/XV_Vale_006.webp',
    'imagenes/XV_Vale_007.webp',
    'imagenes/XV_Vale_008.webp',
    'imagenes/XV_Vale_009.webp',
    'imagenes/XV_Vale_010.webp',
    'imagenes/XV_Vale_011.webp',
    'imagenes/XV_Vale_012.webp',
    'imagenes/XV_Vale_013.webp',
    'imagenes/XV_Vale_014.webp',
    'imagenes/XV_Vale_015.webp',
    'imagenes/XV_Vale_016.webp',
    'imagenes/XV_Vale_017.webp',
    'imagenes/XV_Vale_018.webp',
    'imagenes/XV_Vale_019.webp',
    'imagenes/XV_Vale_020.webp',
    'imagenes/XV_Vale_021.webp',
    'imagenes/XV_Vale_022.webp',
    'imagenes/XV_Vale_023.webp',
    'imagenes/XV_Vale_024.webp',
    'imagenes/XV_Vale_025.webp',
    'imagenes/XV_Vale_026.webp',
    'imagenes/XV_Vale_027.webp',
    'imagenes/XV_Vale_028.webp',
    'imagenes/XV_Vale_029.webp',
    'imagenes/XV_Vale_030.webp',
    'imagenes/XV_Vale_031.webp',
    'imagenes/XV_Vale_032.webp',
    'imagenes/XV_Vale_033.webp',
    'imagenes/XV_Vale_034.webp',
    'imagenes/XV_Vale_035.webp',
    'imagenes/XV_Vale_036.webp',
    'imagenes/XV_Vale_037.webp',
    'imagenes/XV_Vale_038.webp',
    'imagenes/XV_Vale_040.webp',
    'imagenes/XV_Vale_041.webp',
    'imagenes/XV_Vale_042.webp',
    'imagenes/XV_Vale_043.webp',
    'imagenes/XV_Vale_044.webp',
    'imagenes/XV_Vale_045.webp',
    'imagenes/XV_Vale_046.webp',
    'imagenes/XV_Vale_047.webp',
    'imagenes/XV_Vale_048.webp',
    'imagenes/XV_Vale_049.webp',
    'imagenes/XV_Vale_050.webp',
    'imagenes/XV_Vale_051.webp',
    'imagenes/XV_Vale_052.webp',
    'imagenes/XV_Vale_053.webp',
    'imagenes/XV_Vale_054.webp',
    'imagenes/XV_Vale_055.webp',
    'imagenes/XV_Vale_056.webp',
    'imagenes/XV_Vale_057.webp',
    'imagenes/XV_Vale_058.webp',
    'imagenes/XV_Vale_059.webp',
    'imagenes/XV_Vale_060.webp',
    'imagenes/XV_Vale_061.webp',
    'imagenes/XV_Vale_062.webp',
    'imagenes/XV_Vale_063.webp',
    'imagenes/XV_Vale_064.webp',
    'imagenes/XV_Vale_065.webp',
    'imagenes/XV_Vale_066.webp',
    'imagenes/XV_Vale_067.webp',
    'imagenes/XV_Vale_068.webp',
    'imagenes/XV_Vale_069.webp',
    'imagenes/XV_Vale_070.webp',
    'imagenes/XV_Vale_071.webp',
    'imagenes/XV_Vale_072.webp',
    'imagenes/XV_Vale_073.webp',
    'imagenes/XV_Vale_074.webp',
    'imagenes/XV_Vale_075.webp',
    'imagenes/XV_Vale_076.webp',
    'imagenes/XV_Vale_077.webp',
    'imagenes/XV_Vale_078.webp',
    'imagenes/XV_Vale_079.webp',
    'imagenes/XV_Vale_080.webp',
    'imagenes/XV_Vale_081.webp',
    'imagenes/XV_Vale_082.webp',
    'imagenes/XV_Vale_083.webp',
    'imagenes/XV_Vale_084.webp',
    'imagenes/XV_Vale_085.webp',
    'imagenes/XV_Vale_086.webp',
    'imagenes/XV_Vale_087.webp',
    'imagenes/XV_Vale_088.webp',
    'imagenes/XV_Vale_089.webp',
    'imagenes/XV_Vale_090.webp',
    'imagenes/XV_Vale_091.webp',
    'imagenes/XV_Vale_092.webp',
    'imagenes/XV_Vale_093.webp',
    'imagenes/XV_Vale_094.webp',
    'imagenes/XV_Vale_095.webp',
    'imagenes/XV_Vale_096.webp',
    'imagenes/XV_Vale_097.webp',
    'imagenes/XV_Vale_098.webp',
    'imagenes/XV_Vale_099.webp',
    'imagenes/XV_Vale_100.webp',
    'imagenes/XV_Vale_101.webp',
    'imagenes/XV_Vale_102.webp',
    'imagenes/XV_Vale_103.webp',
    'imagenes/XV_Vale_104.webp',
    'imagenes/XV_Vale_105.webp',
    'imagenes/XV_Vale_106.webp',
    'imagenes/XV_Vale_107.webp',
    'imagenes/XV_Vale_108.webp',
    'imagenes/XV_Vale_109.webp',
    'imagenes/XV_Vale_110.webp',
    'imagenes/XV_Vale_111.webp',
    'imagenes/XV_Vale_112.webp',
    'imagenes/XV_Vale_113.webp',
    'imagenes/XV_Vale_114.webp',
    'imagenes/XV_Vale_115.webp',
    'imagenes/XV_Vale_116.webp',
    'imagenes/XV_Vale_117.webp',
    'imagenes/XV_Vale_118.webp',
    'imagenes/XV_Vale_119.webp',
    'imagenes/XV_Vale_120.webp',
    'imagenes/XV_Vale_121.webp',
    'imagenes/XV_Vale_122.webp',
    'imagenes/XV_Vale_123.webp',
    'imagenes/XV_Vale_124.webp',
    'imagenes/XV_Vale_125.webp',
    'imagenes/XV_Vale_126.webp',
    'imagenes/XV_Vale_127.webp',
    'imagenes/XV_Vale_128.webp',
    'imagenes/XV_Vale_129.webp',
    'imagenes/XV_Vale_130.webp',
    'imagenes/XV_Vale_131.webp',
    'imagenes/XV_Vale_132.webp',
    'imagenes/XV_Vale_133.webp',
    'imagenes/XV_Vale_134.webp',
    'imagenes/XV_Vale_135.webp',
    'imagenes/XV_Vale_136.webp',
    'imagenes/XV_Vale_137.webp',
    'imagenes/XV_Vale_138.webp',
    'imagenes/XV_Vale_139.webp',
    'imagenes/XV_Vale_140.webp',
    'imagenes/XV_Vale_141.webp',
    'imagenes/XV_Vale_142.webp',
    'imagenes/XV_Vale_143.webp',
    'imagenes/XV_Vale_144.webp',
    'imagenes/XV_Vale_145.webp',
    'imagenes/XV_Vale_146.webp',
    'imagenes/XV_Vale_147.webp',
    'imagenes/XV_Vale_148.webp',
    'imagenes/XV_Vale_149.webp',
    'imagenes/XV_Vale_150.webp',
    'imagenes/XV_Vale_151.webp',
    'imagenes/XV_Vale_152.webp',
    'imagenes/XV_Vale_153.webp',
    'imagenes/XV_Vale_154.webp',
    'imagenes/XV_Vale_155.webp',
    'imagenes/XV_Vale_156.webp',
    'imagenes/XV_Vale_157.webp',
    'imagenes/XV_Vale_158.webp',
    'imagenes/XV_Vale_159.webp',
    'imagenes/XV_Vale_160.webp',
    'imagenes/XV_Vale_161.webp',
    'imagenes/XV_Vale_162.webp',
    'imagenes/XV_Vale_163.webp',
    'imagenes/XV_Vale_164.webp',
    'imagenes/XV_Vale_165.webp',
    'imagenes/XV_Vale_166.webp',
    'imagenes/XV_Vale_167.webp',
    'imagenes/XV_Vale_168.webp',
    'imagenes/XV_Vale_169.webp',
    'imagenes/XV_Vale_170.webp',
    'imagenes/XV_Vale_171.webp',
    'imagenes/XV_Vale_172.webp',
    'imagenes/XV_Vale_173.webp',
    'imagenes/XV_Vale_174.webp',
    'imagenes/XV_Vale_175.webp',
    'imagenes/XV_Vale_176.webp',
    'imagenes/XV_Vale_177.webp',
    'imagenes/XV_Vale_178.webp',
    'imagenes/XV_Vale_179.webp',
    'imagenes/XV_Vale_180.webp',
    'imagenes/XV_Vale_181.webp',
    'imagenes/XV_Vale_182.webp',
    'imagenes/XV_Vale_183.webp',
    'imagenes/XV_Vale_184.webp',
    'imagenes/XV_Vale_185.webp',
    'imagenes/XV_Vale_186.webp',
    'imagenes/XV_Vale_187.webp',
    'imagenes/XV_Vale_188.webp',
    'imagenes/XV_Vale_189.webp',
    'imagenes/XV_Vale_190.webp',
    'imagenes/XV_Vale_191.webp',
    'imagenes/XV_Vale_192.webp',
    'imagenes/XV_Vale_193.webp',
    'imagenes/XV_Vale_194.webp',
    'imagenes/XV_Vale_195.webp',
    'imagenes/XV_Vale_196.webp',
    'imagenes/XV_Vale_197.webp',
    'imagenes/XV_Vale_198.webp',
    'imagenes/XV_Vale_199.webp',
    'imagenes/XV_Vale_200.webp',
    'imagenes/XV_Vale_201.webp',
    'imagenes/XV_Vale_202.webp',
    'imagenes/XV_Vale_203.webp',
    'imagenes/XV_Vale_204.webp',
    'imagenes/XV_Vale_205.webp',
    'imagenes/XV_Vale_206.webp',
    'imagenes/XV_Vale_207.webp',
    'imagenes/XV_Vale_208.webp',
    'imagenes/XV_Vale_209.webp',
    'imagenes/XV_Vale_210.webp',
    'imagenes/XV_Vale_211.webp',
    'imagenes/XV_Vale_212.webp',
    'imagenes/XV_Vale_213.webp',
    'imagenes/XV_Vale_214.webp',
    'imagenes/XV_Vale_215.webp',
    'imagenes/XV_Vale_216.webp',
    'imagenes/XV_Vale_217.webp',
    'imagenes/XV_Vale_218.webp',
    'imagenes/XV_Vale_219.webp',
    'imagenes/XV_Vale_220.webp',
    'imagenes/XV_Vale_221.webp',
    'imagenes/XV_Vale_222.webp',
    'imagenes/XV_Vale_223.webp',
    'imagenes/XV_Vale_224.webp',
    'imagenes/XV_Vale_225.webp',
    'imagenes/XV_Vale_226.webp',
    'imagenes/XV_Vale_227.webp',
    'imagenes/XV_Vale_228.webp',
    'imagenes/XV_Vale_229.webp',
    'imagenes/XV_Vale_230.webp',
    'imagenes/XV_Vale_231.webp',
    'imagenes/XV_Vale_232.webp',
    'imagenes/XV_Vale_233.webp',
    'imagenes/XV_Vale_234.webp',
    'imagenes/XV_Vale_235.webp',
    'imagenes/XV_Vale_236.webp',
    'imagenes/XV_Vale_237.webp',
    'imagenes/XV_Vale_238.webp',
    'imagenes/XV_Vale_239.webp',
    'imagenes/XV_Vale_240.webp',
    'imagenes/XV_Vale_241.webp',
    'imagenes/XV_Vale_242.webp',
    'imagenes/XV_Vale_243.webp',
    'imagenes/XV_Vale_244.webp',
    'imagenes/XV_Vale_245.webp',
    'imagenes/XV_Vale_246.webp',
    'imagenes/XV_Vale_247.webp',
    'imagenes/XV_Vale_248.webp',
    'imagenes/XV_Vale_249.webp',
    'imagenes/XV_Vale_250.webp',
    'imagenes/XV_Vale_251.webp',
    'imagenes/XV_Vale_252.webp',
    'imagenes/XV_Vale_253.webp',
    'imagenes/XV_Vale_254.webp',
    'imagenes/XV_Vale_255.webp',
    'imagenes/XV_Vale_256.webp',
    'imagenes/XV_Vale_257.webp',
    'imagenes/XV_Vale_258.webp',
    'imagenes/XV_Vale_259.webp',
    'imagenes/XV_Vale_260.webp',
    'imagenes/XV_Vale_261.webp',
    'imagenes/XV_Vale_262.webp',
    'imagenes/XV_Vale_263.webp',
    'imagenes/XV_Vale_264.webp',
    'imagenes/XV_Vale_265.webp',
    'imagenes/XV_Vale_266.webp',
    'imagenes/XV_Vale_267.webp',
    'imagenes/XV_Vale_268.webp',
    'imagenes/XV_Vale_269.webp',
    'imagenes/XV_Vale_270.webp',
    'imagenes/XV_Vale_271.webp',
    'imagenes/XV_Vale_272.webp',
    'imagenes/XV_Vale_273.webp',
    'imagenes/XV_Vale_274.webp',
    'imagenes/XV_Vale_275.webp',
    'imagenes/XV_Vale_276.webp',
    'imagenes/XV_Vale_277.webp',
    'imagenes/XV_Vale_278.webp',
    'imagenes/XV_Vale_279.webp',
    'imagenes/XV_Vale_280.webp',
    'imagenes/XV_Vale_281.webp',
    'imagenes/XV_Vale_282.webp',
    'imagenes/XV_Vale_283.webp',
    'imagenes/XV_Vale_284.webp',
    'imagenes/XV_Vale_285.webp',
    'imagenes/XV_Vale_286.webp',
    'imagenes/XV_Vale_287.webp',
    'imagenes/XV_Vale_288.webp',
    'imagenes/XV_Vale_289.webp',
    'imagenes/XV_Vale_290.webp',
    'imagenes/XV_Vale_291.webp',
    'imagenes/XV_Vale_292.webp',
    'imagenes/XV_Vale_293.webp',
    'imagenes/XV_Vale_294.webp',
    'imagenes/XV_Vale_295.webp',
    'imagenes/XV_Vale_296.webp',
    'imagenes/XV_Vale_297.webp',
    'imagenes/XV_Vale_298.webp',
    'imagenes/XV_Vale_299.webp',
    'imagenes/XV_Vale_300.webp',
    'imagenes/XV_Vale_301.webp',
    'imagenes/XV_Vale_302.webp',
    'imagenes/XV_Vale_303.webp',
    'imagenes/XV_Vale_304.webp',
    'imagenes/XV_Vale_305.webp',
    'imagenes/XV_Vale_306.webp',
    'imagenes/XV_Vale_307.webp',
    'imagenes/XV_Vale_308.webp',
    'imagenes/XV_Vale_309.webp',
    'imagenes/XV_Vale_310.webp',
    'imagenes/XV_Vale_311.webp',
    'imagenes/XV_Vale_312.webp',
    'imagenes/XV_Vale_313.webp',
    'imagenes/XV_Vale_314.webp',
    'imagenes/XV_Vale_315.webp',
    'imagenes/XV_Vale_316.webp',
    'imagenes/XV_Vale_317.webp',
    'imagenes/XV_Vale_318.webp',
    'imagenes/XV_Vale_319.webp',
    'imagenes/XV_Vale_320.webp',
    'imagenes/XV_Vale_321.webp',
    'imagenes/XV_Vale_322.webp',
    'imagenes/XV_Vale_323.webp',
    'imagenes/XV_Vale_324.webp',
    'imagenes/XV_Vale_325.webp',
    'imagenes/XV_Vale_326.webp',
    'imagenes/XV_Vale_327.webp',
    'imagenes/XV_Vale_328.webp',
    'imagenes/XV_Vale_329.webp',
    'imagenes/XV_Vale_330.webp',
    'imagenes/XV_Vale_331.webp',
    'imagenes/XV_Vale_332.webp',
    'imagenes/XV_Vale_333.webp',
    'imagenes/XV_Vale_334.webp',
    'imagenes/XV_Vale_335.webp',
    'imagenes/XV_Vale_336.webp',
    'imagenes/XV_Vale_337.webp',
    'imagenes/XV_Vale_338.webp',
    'imagenes/XV_Vale_339.webp',
    'imagenes/XV_Vale_340.webp',
    'imagenes/XV_Vale_341.webp',
    'imagenes/XV_Vale_342.webp',
    'imagenes/XV_Vale_343.webp',
    'imagenes/XV_Vale_344.webp',
    'imagenes/XV_Vale_345.webp',
    'imagenes/XV_Vale_346.webp',
    'imagenes/XV_Vale_347.webp',
    'imagenes/XV_Vale_348.webp',
    'imagenes/XV_Vale_349.webp',
    'imagenes/XV_Vale_350.webp',
    'imagenes/XV_Vale_351.webp',
    'imagenes/XV_Vale_352.webp',
    'imagenes/XV_Vale_353.webp',
    'imagenes/XV_Vale_354.webp',
    'imagenes/XV_Vale_355.webp',
    'imagenes/XV_Vale_356.webp',
    'imagenes/XV_Vale_357.webp',
    'imagenes/XV_Vale_358.webp',
    'imagenes/XV_Vale_359.webp',
    'imagenes/XV_Vale_360.webp',
    'imagenes/XV_Vale_361.webp',
    'imagenes/XV_Vale_362.webp',
    'imagenes/XV_Vale_363.webp',
    'imagenes/XV_Vale_364.webp',
    'imagenes/XV_Vale_365.webp',
    'imagenes/XV_Vale_366.webp',
    'imagenes/XV_Vale_367.webp',
    'imagenes/XV_Vale_368.webp',
    'imagenes/XV_Vale_369.webp',
    'imagenes/XV_Vale_370.webp',
    'imagenes/XV_Vale_371.webp',
    'imagenes/XV_Vale_372.webp',
    'imagenes/XV_Vale_373.webp',
    'imagenes/XV_Vale_374.webp',
    'imagenes/XV_Vale_375.webp',
    'imagenes/XV_Vale_376.webp',
    'imagenes/XV_Vale_377.webp',
    'imagenes/XV_Vale_378.webp',
    'imagenes/XV_Vale_379.webp',
    'imagenes/XV_Vale_380.webp',
    'imagenes/XV_Vale_381.webp',
    'imagenes/XV_Vale_382.webp',
    'imagenes/XV_Vale_383.webp',
    'imagenes/XV_Vale_384.webp',
    'imagenes/XV_Vale_385.webp',
    'imagenes/XV_Vale_386.webp',
    'imagenes/XV_Vale_387.webp',
    'imagenes/XV_Vale_388.webp',
    'imagenes/XV_Vale_389.webp',
    'imagenes/XV_Vale_390.webp',
    'imagenes/XV_Vale_391.webp',
    'imagenes/XV_Vale_392.webp',
    'imagenes/XV_Vale_393.webp',
    'imagenes/XV_Vale_394.webp',
    'imagenes/XV_Vale_395.webp',
    'imagenes/XV_Vale_396.webp',
    'imagenes/XV_Vale_397.webp',
    'imagenes/XV_Vale_398.webp',
    'imagenes/XV_Vale_399.webp',
    'imagenes/XV_Vale_400.webp',
    'imagenes/XV_Vale_401.webp',
    'imagenes/XV_Vale_402.webp',
    'imagenes/XV_Vale_403.webp',
    'imagenes/XV_Vale_404.webp',
    'imagenes/XV_Vale_405.webp',
    'imagenes/XV_Vale_406.webp',
    'imagenes/XV_Vale_407.webp',
    'imagenes/XV_Vale_408.webp',
    'imagenes/XV_Vale_409.webp',
    'imagenes/XV_Vale_410.webp',
    'imagenes/XV_Vale_411.webp',
    'imagenes/XV_Vale_412.webp',
    'imagenes/XV_Vale_413.webp',
    'imagenes/XV_Vale_414.webp',
    'imagenes/XV_Vale_415.webp',
    'imagenes/XV_Vale_416.webp',
    'imagenes/XV_Vale_417.webp',
    'imagenes/XV_Vale_418.webp',
    'imagenes/XV_Vale_419.webp',
    'imagenes/XV_Vale_420.webp',
    'imagenes/XV_Vale_421.webp',
    'imagenes/XV_Vale_422.webp',
    'imagenes/XV_Vale_423.webp',
    'imagenes/XV_Vale_424.webp',
    'imagenes/XV_Vale_425.webp',
    'imagenes/XV_Vale_426.webp',
    'imagenes/XV_Vale_427.webp',
    'imagenes/XV_Vale_428.webp',
    'imagenes/XV_Vale_429.webp',
    'imagenes/XV_Vale_430.webp',
    'imagenes/XV_Vale_431.webp',
    'imagenes/XV_Vale_432.webp',
    'imagenes/XV_Vale_433.webp',
    'imagenes/XV_Vale_434.webp',
    'imagenes/XV_Vale_435.webp',
    'imagenes/XV_Vale_436.webp',
    'imagenes/XV_Vale_437.webp',
    'imagenes/XV_Vale_438.webp',
    'imagenes/XV_Vale_439.webp',
    'imagenes/XV_Vale_440.webp',
    'imagenes/XV_Vale_441.webp',
    'imagenes/XV_Vale_442.webp',
    'imagenes/XV_Vale_443.webp',
    'imagenes/XV_Vale_444.webp',
    'imagenes/XV_Vale_445.webp',
    'imagenes/XV_Vale_446.webp',
    'imagenes/XV_Vale_447.webp',
    'imagenes/XV_Vale_448.webp',
    'imagenes/XV_Vale_449.webp',
    'imagenes/XV_Vale_450.webp',
    'imagenes/XV_Vale_451.webp',
    'imagenes/XV_Vale_452.webp',
    'imagenes/XV_Vale_453.webp',
    'imagenes/XV_Vale_454.webp',
    'imagenes/XV_Vale_455.webp',
    'imagenes/XV_Vale_456.webp',
    'imagenes/XV_Vale_457.webp',
    'imagenes/XV_Vale_458.webp',
    'imagenes/XV_Vale_459.webp',
    'imagenes/XV_Vale_460.webp',
    'imagenes/XV_Vale_461.webp',
    'imagenes/XV_Vale_462.webp',
    'imagenes/XV_Vale_463.webp',
    'imagenes/XV_Vale_464.webp',
    'imagenes/XV_Vale_465.webp',
    'imagenes/XV_Vale_466.webp',
    'imagenes/XV_Vale_467.webp',
    'imagenes/XV_Vale_468.webp',
    'imagenes/XV_Vale_469.webp',
    'imagenes/XV_Vale_470.webp',
    'imagenes/XV_Vale_471.webp',
    'imagenes/XV_Vale_472.webp',
    'imagenes/XV_Vale_473.webp',
    'imagenes/XV_Vale_474.webp',
    'imagenes/XV_Vale_475.webp',
    'imagenes/XV_Vale_476.webp',
    'imagenes/XV_Vale_477.webp',
    'imagenes/XV_Vale_478.webp',
    'imagenes/XV_Vale_479.webp',
    'imagenes/XV_Vale_480.webp',
    'imagenes/XV_Vale_481.webp',
    'imagenes/XV_Vale_482.webp',
    'imagenes/XV_Vale_483.webp',
    'imagenes/XV_Vale_484.webp',
    'imagenes/XV_Vale_485.webp',
    'imagenes/XV_Vale_486.webp',
    'imagenes/XV_Vale_487.webp',
    'imagenes/XV_Vale_488.webp',
    'imagenes/XV_Vale_489.webp',
    'imagenes/XV_Vale_490.webp',
    'imagenes/XV_Vale_491.webp',
    'imagenes/XV_Vale_492.webp',
    'imagenes/XV_Vale_493.webp',
    'imagenes/XV_Vale_494.webp',
    'imagenes/XV_Vale_495.webp',
    'imagenes/XV_Vale_496.webp',
    'imagenes/XV_Vale_497.webp',
    'imagenes/XV_Vale_498.webp',
    'imagenes/XV_Vale_499.webp',
    'imagenes/XV_Vale_500.webp',
    'imagenes/XV_Vale_501.webp',
    'imagenes/XV_Vale_502.webp',
    'imagenes/XV_Vale_503.webp',
    'imagenes/XV_Vale_504.webp',
    'imagenes/XV_Vale_505.webp',
    'imagenes/XV_Vale_506.webp',
    'imagenes/XV_Vale_507.webp',
    'imagenes/XV_Vale_508.webp',
    'imagenes/XV_Vale_509.webp',
    'imagenes/XV_Vale_510.webp',
    'imagenes/XV_Vale_511.webp',
    'imagenes/XV_Vale_512.webp',
    'imagenes/XV_Vale_513.webp',
    'imagenes/XV_Vale_514.webp',
    'imagenes/XV_Vale_515.webp',
    'imagenes/XV_Vale_516.webp',
    'imagenes/XV_Vale_517.webp',
    'imagenes/XV_Vale_518.webp',
    'imagenes/XV_Vale_519.webp',
    'imagenes/XV_Vale_520.webp',
    'imagenes/XV_Vale_521.webp',
    'imagenes/XV_Vale_522.webp',
    'imagenes/XV_Vale_523.webp',
    'imagenes/XV_Vale_524.webp',
    'imagenes/XV_Vale_525.webp',
    'imagenes/XV_Vale_526.webp',
    'imagenes/XV_Vale_527.webp',
    'imagenes/XV_Vale_528.webp',
    'imagenes/XV_Vale_529.webp',
    'imagenes/XV_Vale_530.webp',
    'imagenes/XV_Vale_531.webp',
    'imagenes/XV_Vale_532.webp',
    'imagenes/XV_Vale_533.webp',
    'imagenes/XV_Vale_534.webp',
    'imagenes/XV_Vale_535.webp',
    'imagenes/XV_Vale_536.webp',
    'imagenes/XV_Vale_537.webp',
    'imagenes/XV_Vale_538.webp',
    'imagenes/XV_Vale_539.webp',
    'imagenes/XV_Vale_540.webp',
    'imagenes/XV_Vale_541.webp',
    'imagenes/XV_Vale_542.webp',
    'imagenes/XV_Vale_543.webp',
    'imagenes/XV_Vale_544.webp',
    'imagenes/XV_Vale_545.webp',
    'imagenes/XV_Vale_546.webp',
    'imagenes/XV_Vale_547.webp',
    'imagenes/XV_Vale_548.webp',
    'imagenes/XV_Vale_549.webp',
    'imagenes/XV_Vale_550.webp',
    'imagenes/XV_Vale_551.webp',
    'imagenes/XV_Vale_552.webp',
    'imagenes/XV_Vale_553.webp',
    'imagenes/XV_Vale_554.webp',
    'imagenes/XV_Vale_555.webp',
    'imagenes/XV_Vale_556.webp',
    'imagenes/XV_Vale_557.webp',
    'imagenes/XV_Vale_558.webp',
    'imagenes/XV_Vale_559.webp',
    'imagenes/XV_Vale_560.webp',
    'imagenes/XV_Vale_561.webp',
    'imagenes/XV_Vale_562.webp',
    'imagenes/XV_Vale_563.webp',
    'imagenes/XV_Vale_564.webp',
    'imagenes/XV_Vale_565.webp',
    'imagenes/XV_Vale_566.webp',
    'imagenes/XV_Vale_567.webp',
    'imagenes/XV_Vale_568.webp',
    'imagenes/XV_Vale_569.webp',
    'imagenes/XV_Vale_570.webp',
    'imagenes/XV_Vale_571.webp',
    'imagenes/XV_Vale_572.webp',
    'imagenes/XV_Vale_573.webp',
    'imagenes/XV_Vale_574.webp',
    'imagenes/XV_Vale_575.webp',
    'imagenes/XV_Vale_576.webp',
    'imagenes/XV_Vale_577.webp',
    'imagenes/XV_Vale_578.webp',
    'imagenes/XV_Vale_579.webp',
    'imagenes/XV_Vale_580.webp',
    'imagenes/XV_Vale_581.webp',
    'imagenes/XV_Vale_582.webp',
    'imagenes/XV_Vale_583.webp',
    'imagenes/XV_Vale_584.webp',
    'imagenes/XV_Vale_585.webp',
    'imagenes/XV_Vale_586.webp',
    'imagenes/XV_Vale_587.webp',
    'imagenes/XV_Vale_588.webp',
    'imagenes/XV_Vale_589.webp',
    'imagenes/XV_Vale_590.webp',
    'imagenes/XV_Vale_591.webp',
    'imagenes/XV_Vale_592.webp',
    'imagenes/XV_Vale_593.webp',
    'imagenes/XV_Vale_594.webp',
    'imagenes/XV_Vale_595.webp',
    'imagenes/XV_Vale_596.webp',
    'imagenes/XV_Vale_597.webp',
    'imagenes/XV_Vale_598.webp',
    'imagenes/XV_Vale_599.webp',
    'imagenes/XV_Vale_600.webp',
    'imagenes/XV_Vale_601.webp',
    'imagenes/XV_Vale_602.webp',
    'imagenes/XV_Vale_603.webp',
    'imagenes/XV_Vale_604.webp',
    'imagenes/XV_Vale_605.webp',
    'imagenes/XV_Vale_606.webp',
    'imagenes/XV_Vale_607.webp',
    'imagenes/XV_Vale_608.webp',
    'imagenes/XV_Vale_609.webp',
    'imagenes/XV_Vale_610.webp',
    'imagenes/XV_Vale_611.webp',
    'imagenes/XV_Vale_612.webp',
    'imagenes/XV_Vale_613.webp',
    'imagenes/XV_Vale_614.webp',
    'imagenes/XV_Vale_615.webp',
    'imagenes/XV_Vale_616.webp'
];

const STORAGE_KEY = 'valeria_photo_selections';
const LIMITES = {
    ampliacion: 1,
    impresion: null,
    invitacion: null
};
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';
const PAGE_SIZE = 60;
const PAGE_KEY = 'valeria_editadas_page';
let currentPage = parseInt(sessionStorage.getItem(PAGE_KEY) || '0', 10);

// Thumbnail helper: convierte 'imagenes/X.webp' -> 'imagenes/thumb/X.webp'
function getThumbPath(fullPath) {
    return fullPath.replace('imagenes/', 'imagenes/thumb/');
}

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent =
        LIMITES.ampliacion ? `${stats.ampliacion}/${LIMITES.ampliacion}` : stats.ampliacion;
    document.getElementById('countImpresion').textContent =
        LIMITES.impresion ? `${stats.impresion}/${LIMITES.impresion}` : stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    const ampliacionCard = document.querySelector('.stat-card.ampliacion');
    const impresionCard = document.querySelector('.stat-card.impresion');

    if (ampliacionCard) {
        if (stats.ampliacion > LIMITES.ampliacion) {
            ampliacionCard.style.borderColor = '#f44336';
            ampliacionCard.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
        } else if (stats.ampliacion === LIMITES.ampliacion) {
            ampliacionCard.style.borderColor = '#4caf50';
            ampliacionCard.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else {
            ampliacionCard.style.borderColor = '';
            ampliacionCard.style.backgroundColor = '';
        }
    }

    if (impresionCard) {
        if (stats.impresion > LIMITES.impresion) {
            impresionCard.style.borderColor = '#f44336';
            impresionCard.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
        } else if (stats.impresion === LIMITES.impresion) {
            impresionCard.style.borderColor = '#4caf50';
            impresionCard.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else {
            impresionCard.style.borderColor = '';
            impresionCard.style.backgroundColor = '';
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún.</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img src="${getThumbPath(photo)}" alt="${displayNumber}" loading="lazy" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='${photo}'}">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    modalImageContainer.innerHTML = `
        <img id="modalImage" src="${photo}" alt="${displayNumber}">
        <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
    `;

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains("selected");
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    updateStats();
    updateFilterButtons();
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'Valeria',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-valeria-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '📸 SELECCIÓN DE FOTOS - VALERIA\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📋 SEGÚN CONTRATO:\n`;
    summary += `   🖼️  Ampliación requerida: ${LIMITES.ampliacion} foto (28x35 cm)\n`;
    summary += `   📸 Impresión requerida: ${LIMITES.impresion} fotos (5x7")\n\n`;
    summary += `📊 RESUMEN ACTUAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}/${LIMITES.ampliacion} ${stats.ampliacion === LIMITES.ampliacion ? '✓' : stats.ampliacion > LIMITES.ampliacion ? '⚠️ EXCEDIDO' : '⚠️ FALTA'}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}/${LIMITES.impresion} ${stats.impresion === LIMITES.impresion ? '✓' : stats.impresion > LIMITES.impresion ? '⚠️ EXCEDIDO' : '⚠️ FALTA'}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = summary;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    document.getElementById('btnFilterAll').classList.add('active');

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const isCurrentlySelected = btn.classList.contains('selected');

            if (!isCurrentlySelected) {
                const stats = getStats();

                if (category === 'ampliacion' && stats.ampliacion >= LIMITES.ampliacion) {
                    const currentSelection = photoSelections[currentPhotoIndex] || {};
                    if (!currentSelection.ampliacion) {
                        showToast(`⚠️ Ya seleccionaste ${LIMITES.ampliacion} foto(s) para ampliación. Deselecciona otra primero.`, 'error');
                        return;
                    }
                }

                if (category === 'impresion' && stats.impresion >= LIMITES.impresion) {
                    const currentSelection = photoSelections[currentPhotoIndex] || {};
                    if (!currentSelection.impresion) {
                        showToast(`⚠️ Ya seleccionaste ${LIMITES.impresion} fotos para impresión. Deselecciona otra primero.`, 'error');
                        return;
                    }
                }
            }

            btn.classList.toggle('selected');
        });
    });

    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections();
    }
});

window.addEventListener('beforeunload', () => {
    saveSelections();
});
