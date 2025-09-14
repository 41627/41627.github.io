<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>数学符号与希腊字母完整参考</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #2c3e50;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%);
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        header {
            text-align: center;
            margin-bottom: 30px;
            padding: 30px;
            background: linear-gradient(120deg, #2c3e50, #4ca1af);
            color: white;
            border-radius: 10px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }
        
        h1 {
            font-size: 2.8rem;
            margin-bottom: 10px;
        }
        
        .description {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto;
            opacity: 0.9;
        }
        
        .card {
            background: white;
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 25px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .card-title {
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 15px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .card-title i {
            color: #3498db;
        }
        
        .symbol-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 15px;
        }
        
        .symbol-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 15px;
            background: #f8f9fa;
            border-radius: 8px;
            transition: background 0.2s;
        }
        
        .symbol-item:hover {
            background: #e9ecef;
        }
        
        .symbol-char {
            font-size: 26px;
            min-width: 50px;
            text-align: center;
            color: #2c3e50;
        }
        
        .symbol-name {
            flex-grow: 1;
            padding: 0 15px;
            font-weight: 500;
        }
        
        .symbol-code {
            font-family: 'Courier New', monospace;
            background: #e74c3c;
            color: white;
            padding: 6px 12px;
            border-radius: 5px;
            font-size: 14px;
            white-space: nowrap;
        }
        
        .example-box {
            background: #f8f9fa;
            border-left: 4px solid #3498db;
            padding: 15px;
            margin-top: 20px;
            border-radius: 0 8px 8px 0;
        }
        
        .example-title {
            font-weight: 600;
            margin-bottom: 10px;
            color: #2c3e50;
        }
        
        .example-code {
            font-family: 'Courier New', monospace;
            background: #2c3e50;
            color: white;
            padding: 12px;
            border-radius: 5px;
            overflow-x: auto;
            margin-bottom: 10px;
        }
        
        .example-preview {
            font-size: 1.2rem;
            padding: 12px;
            background: white;
            border-radius: 5px;
            box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
        }
        
        .footer {
            text-align: center;
            margin-top: 40px;
            padding: 25px;
            color: #7f8c8d;
            background: white;
            border-radius: 10px;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
        }
        
        @media (max-width: 768px) {
            .symbol-grid {
                grid-template-columns: 1fr;
            }
            
            header {
                padding: 20px;
            }
            
            h1 {
                font-size: 2.2rem;
            }
            
            .description {
                font-size: 1rem;
            }
        }
        
        .highlight {
            background: #fff8e1;
            padding: 2px 5px;
            border-radius: 3px;
            border: 1px solid #ffecb3;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>HTML数学符号与希腊字母完整参考</h1>
            <p class="description">本页面展示了如何在HTML中显示希腊字母（大小写）、数学符号、上下标以及各种算符，包括它们的名称和HTML实体代码。</p>
        </header>
        
        <!-- 希腊字母部分 -->
        <div class="card">
            <h2 class="card-title"><i class="fas fa-sigma"></i> 希腊字母（小写）</h2>
            <div class="symbol-grid">
                <div class="symbol-item">
                    <div class="symbol-char">α</div>
                    <div class="symbol-name">Alpha</div>
                    <div class="symbol-code">&amp;alpha;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">β</div>
                    <div class="symbol-name">Beta</div>
                    <div class="symbol-code">&amp;beta;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">γ</div>
                    <div class="symbol-name">Gamma</div>
                    <div class="symbol-code">&amp;gamma;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">δ</div>
                    <div class="symbol-name">Delta</div>
                    <div class="symbol-code">&amp;delta;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">ε</div>
                    <div class="symbol-name">Epsilon</div>
                    <div class="symbol-code">&amp;epsilon;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">ζ</div>
                    <div class="symbol-name">Zeta</div>
                    <div class="symbol-code">&amp;zeta;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">η</div>
                    <div class="symbol-name">Eta</div>
                    <div class="symbol-code">&amp;eta;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">θ</div>
                    <div class="symbol-name">Theta</div>
                    <div class="symbol-code">&amp;theta;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">ι</div>
                    <div class="symbol-name">Iota</div>
                    <div class="symbol-code">&amp;iota;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">κ</div>
                    <div class="symbol-name">Kappa</div>
                    <div class="symbol-code">&amp;kappa;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">λ</div>
                    <div class="symbol-name">Lambda</div>
                    <div class="symbol-code">&amp;lambda;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">μ</div>
                    <div class="symbol-name">Mu</div>
                    <div class="symbol-code">&amp;mu;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">ν</div>
                    <div class="symbol-name">Nu</div>
                    <div class="symbol-code">&amp;nu;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">ξ</div>
                    <div class="symbol-name">Xi</div>
                    <div class="symbol-code">&amp;xi;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">ο</div>
                    <div class="symbol-name">Omicron</div>
                    <div class="symbol-code">&amp;omicron;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">π</div>
                    <div class="symbol-name">Pi</div>
                    <div class="symbol-code">&amp;pi;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">ρ</div>
                    <div class="symbol-name">Rho</div>
                    <div class="symbol-code">&amp;rho;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">σ</div>
                    <div class="symbol-name">Sigma</div>
                    <div class="symbol-code">&amp;sigma;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">τ</div>
                    <div class="symbol-name">Tau</div>
                    <div class="symbol-code">&amp;tau;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">υ</div>
                    <div class="symbol-name">Upsilon</div>
                    <div class="symbol-code">&amp;upsilon;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">φ</div>
                    <div class="symbol-name">Phi</div>
                    <div class="symbol-code">&amp;phi;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">χ</div>
                    <div class="symbol-name">Chi</div>
                    <div class="symbol-code">&amp;chi;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">ψ</div>
                    <div class="symbol-name">Psi</div>
                    <div class="symbol-code">&amp;psi;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">ω</div>
                    <div class="symbol-name">Omega</div>
                    <div class="symbol-code">&amp;omega;</div>
                </div>
            </div>
        </div>
        
        <!-- 希腊字母大写 -->
        <div class="card">
            <h2 class="card-title"><i class="fas fa-sigma"></i> 希腊字母（大写）</h2>
            <div class="symbol-grid">
                <div class="symbol-item">
                    <div class="symbol-char">Α</div>
                    <div class="symbol-name">Alpha</div>
                    <div class="symbol-code">&amp;Alpha;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Β</div>
                    <div class="symbol-name">Beta</div>
                    <div class="symbol-code">&amp;Beta;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Γ</div>
                    <div class="symbol-name">Gamma</div>
                    <div class="symbol-code">&amp;Gamma;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Δ</div>
                    <div class="symbol-name">Delta</div>
                    <div class="symbol-code">&amp;Delta;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Ε</div>
                    <div class="symbol-name">Epsilon</div>
                    <div class="symbol-code">&amp;Epsilon;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Ζ</div>
                    <div class="symbol-name">Zeta</div>
                    <div class="symbol-code">&amp;Zeta;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Η</div>
                    <div class="symbol-name">Eta</div>
                    <div class="symbol-code">&amp;Eta;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Θ</div>
                    <div class="symbol-name">Theta</div>
                    <div class="symbol-code">&amp;Theta;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Ι</div>
                    <div class="symbol-name">Iota</div>
                    <div class="symbol-code">&amp;Iota;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Κ</div>
                    <div class="symbol-name">Kappa</div>
                    <div class="symbol-code">&amp;Kappa;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Λ</div>
                    <div class="symbol-name">Lambda</div>
                    <div class="symbol-code">&amp;Lambda;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Μ</div>
                    <div class="symbol-name">Mu</div>
                    <div class="symbol-code">&amp;Mu;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Ν</div>
                    <div class="symbol-name">Nu</div>
                    <div class="symbol-code">&amp;Nu;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Ξ</div>
                    <div class="symbol-name">Xi</div>
                    <div class="symbol-code">&amp;Xi;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Ο</div>
                    <div class="symbol-name">Omicron</div>
                    <div class="symbol-code">&amp;Omicron;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Π</div>
                    <div class="symbol-name">Pi</div>
                    <div class="symbol-code">&amp;Pi;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Ρ</div>
                    <div class="symbol-name">Rho</div>
                    <div class="symbol-code">&amp;Rho;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Σ</div>
                    <div class="symbol-name">Sigma</div>
                    <div class="symbol-code">&amp;Sigma;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Τ</div>
                    <div class="symbol-name">Tau</div>
                    <div class="symbol-code">&amp;Tau;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Υ</div>
                    <div class="symbol-name">Upsilon</div>
                    <div class="symbol-code">&amp;Upsilon;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Φ</div>
                    <div class="symbol-name">Phi</div>
                    <div class="symbol-code">&amp;Phi;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Χ</div>
                    <div class="symbol-name">Chi</div>
                    <div class="symbol-code">&amp;Chi;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Ψ</div>
                    <div class="symbol-name">Psi</div>
                    <div class="symbol-code">&amp;Psi;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">Ω</div>
                    <div class="symbol-name">Omega</div>
                    <div class="symbol-code">&amp;Omega;</div>
                </div>
            </div>
        </div>
        
        <!-- 数学符号 -->
        <div class="card">
            <h2 class="card-title"><i class="fas fa-plus-minus"></i> 数学符号</h2>
            <div class="symbol-grid">
                <div class="symbol-item">
                    <div class="symbol-char">+</div>
                    <div class="symbol-name">加号</div>
                    <div class="symbol-code">+</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">−</div>
                    <div class="symbol-name">减号</div>
                    <div class="symbol-code">&amp;minus;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">×</div>
                    <div class="symbol-name">乘号</div>
                    <div class="symbol-code">&amp;times;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">÷</div>
                    <div class="symbol-name">除号</div>
                    <div class="symbol-code">&amp;divide;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">=</div>
                    <div class="symbol-name">等号</div>
                    <div class="symbol-code">=</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">≠</div>
                    <div class="symbol-name">不等号</div>
                    <div class="symbol-code">&amp;ne;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">±</div>
                    <div class="symbol-name">加减号</div>
                    <div class="symbol-code">&amp;plusmn;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">∓</div>
                    <div class="symbol-name">减加号</div>
                    <div class="symbol-code">&amp;mnplus;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">√</div>
                    <div class="symbol-name">平方根</div>
                    <div class="symbol-code">&amp;radic;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">∞</div>
                    <div class="symbol-name">无穷大</div>
                    <div class="symbol-code">&amp;infin;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">∫</div>
                    <div class="symbol-name">积分</div>
                    <div class="symbol-code">&amp;int;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">∬</div>
                    <div class="symbol-name">二重积分</div>
                    <div class="symbol-code">&amp;Int;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">∭</div>
                    <div class="symbol-name">三重积分</div>
                    <div class="symbol-code">&amp;iiint;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">∮</div>
                    <div class="symbol-name">曲线积分</div>
                    <div class="symbol-code">&amp;oint;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">∑</div>
                    <div class="symbol-name">求和</div>
                    <div class="symbol-code">&amp;sum;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">∏</div>
                    <div class="symbol-name">求积</div>
                    <div class="symbol-code">&amp;prod;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">∂</div>
                    <div class="symbol-name">偏微分</div>
                    <div class="symbol-code">&amp;part;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">∇</div>
                    <div class="symbol-name">Nabla算子</div>
                    <div class="symbol-code">&amp;nabla;</div>
                </div>
            </div>
        </div>
        
        <!-- 关系符号 -->
        <div class="card">
            <h2 class="card-title"><i class="fas fa-less-than-equal"></i> 关系符号</h2>
            <div class="symbol-grid">
                <div class="symbol-item">
                    <div class="symbol-char">=</div>
                    <div class="symbol-name">等号</div>
                    <div class="symbol-code">=</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">≠</div>
                    <div class="symbol-name">不等号</div>
                    <div class="symbol-code">&amp;ne;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">≈</div>
                    <div class="symbol-name">约等于</div>
                    <div class="symbol-code">&amp;asymp;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">≡</div>
                    <div class="symbol-name">恒等于</div>
                    <div class="symbol-code">&amp;equiv;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">∼</div>
                    <div class="symbol-name">相似于</div>
                    <div class="symbol-code">&amp;sim;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">∝</div>
                    <div class="symbol-name">正比于</div>
                    <div class="symbol-code">&amp;prop;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">＜</div>
                    <div class="symbol-name">小于</div>
                    <div class="symbol-code">&amp;lt;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">＞</div>
                    <div class="symbol-name">大于</div>
                    <div class="symbol-code">&amp;gt;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">≤</div>
                    <div class="symbol-name">小于等于</div>
                    <div class="symbol-code">&amp;le;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">≥</div>
                    <div class="symbol-name">大于等于</div>
                    <div class="symbol-code">&amp;ge;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">≪</div>
                    <div class="symbol-name">远小于</div>
                    <div class="symbol-code">&amp;ll;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">≫</div>
                    <div class="symbol-name">远大于</div>
                    <div class="symbol-code">&amp;gg;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">⊂</div>
                    <div class="symbol-name">子集</div>
                    <div class="symbol-code">&amp;sub;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">⊃</div>
                    <div class="symbol-name">超集</div>
                    <div class="symbol-code">&amp;sup;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">⊆</div>
                    <div class="symbol-name">子集或等于</div>
                    <div class="symbol-code">&amp;sube;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">⊇</div>
                    <div class="symbol-name">超集或等于</div>
                    <div class="symbol-code">&amp;supe;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">∈</div>
                    <div class="symbol-name">属于</div>
                    <div class="symbol-code">&amp;isin;</div>
                </div>
                <div class="symbol-item">
                    <div class="symbol-char">∉</div>
                    <div class="symbol-name">不属于</div>
                    <div class="symbol-code">&amp;notin;</div>
                </div>
            </div>
        </div>
        
        <!-- 上下标示例 -->
        <div class="card">
            <h2 class="card-title"><i class="fas fa-superscript"></i> 上下标表示法</h2>
            <div class="example-box">
                <div class="example-title">HTML代码：</div>
                <div class="example-code">
                    &lt;p&gt;二次公式: x = (-b ± √(b&lt;sup&gt;2&lt;/sup&gt; - 4ac)) / (2a)&lt;/p&gt;<br>
                    &lt;p&gt;化学式: H&lt;sub&gt;2&lt;/sub&gt;O&lt;/p&gt;<br>
                    &lt;p&gt;指数: e&lt;sup&gt;x&lt;/sup&gt;&lt;/p&gt;
                </div>
                <div class="example-title">显示效果：</div>
                <div class="example-preview">
                    <p>二次公式: x = (-b ± √(b<sup>2</sup> - 4ac)) / (2a)</p>
                    <p>化学式: H<sub>2</sub>O</p>
                    <p>指数: e<sup>x</sup></p>
                </div>
            </div>
        </div>
        
        <!-- 综合示例 -->
        <div class="card">
            <h2 class="card-title"><i class="fas fa-calculator"></i> 综合数学表达式示例</h2>
            <div class="example-box">
                <div class="example-title">HTML代码：</div>
                <div class="example-code">
                    &lt;p&gt;二次公式: x = (-b ± √(b&lt;sup&gt;2&lt;/sup&gt; - 4ac)) / (2a)&lt;/p&gt;<br>
                    &lt;p&gt;积分示例: ∫f(x)dx from a to b&lt;/p&gt;<br>
                    &lt;p&gt;希腊字母使用: α + β = γ&lt;/p&gt;<br>
                    &lt;p&gt;求和公式: ∑&lt;sub&gt;i=1&lt;/sub&gt;&lt;sup&gt;n&lt;/sup&gt; i = n(n+1)/2&lt;/p&gt;
                </div>
                <div class="example-title">显示效果：</div>
                <div class="example-preview">
                    <p>二次公式: x = (-b ± √(b<sup>2</sup> - 4ac)) / (2a)</p>
                    <p>积分示例: ∫f(x)dx from a to b</p>
                    <p>希腊字母使用: α + β = γ</p>
                    <p>求和公式: ∑<sub>i=1</sub><sup>n</sup> i = n(n+1)/2</p>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>© 2023 数学符号与希腊字母完整参考 | 使用HTML实体代码在网页中显示特殊符号</p>
            <p>提示：在HTML中使用这些符号时，可以直接使用字符本身，也可以使用相应的HTML实体代码</p>
        </div>
    </div>
</body>
</html>
