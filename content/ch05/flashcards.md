## CARD id=fc-ch05-001 ref=ch05-banach-series-absolument-convergentes tags=enonce
### Q
Énoncer la caractérisation des espaces de Banach par les séries absolument convergentes.
### R
Soit $E$ un espace vectoriel normé (réel). Alors $E$ est complet si et seulement si toute série $\sum x_n$ à valeurs dans $E$ **absolument convergente** (c'est-à-dire $\sum_n \norm{x_n}_E<+\infty$) est convergente. (poly, Proposition V.1.1, p. 93)

## CARD id=fc-ch05-002 ref=ch05-norme-operateur-def tags=enonce,definition
### Q
Définir $\mathcal L(E;F)$ et la norme d'opérateur. Comment caractériser la continuité d'une application linéaire $T:E\to F$ ?
### R
$\mathcal L(E;F)$ est l'ensemble des applications linéaires **continues** de $E$ dans $F$ (evn). Pour $T$ linéaire : $T$ continue $\iff$ $T$ continue en $0$ $\iff$ $T$ bornée, c'est-à-dire
$$\norm{T}_{\mathcal L(E;F)}:=\sup_{x\neq 0}\frac{\norm{T(x)}_F}{\norm{x}_E}<+\infty .\qquad\text{(V.1.1)}$$
De plus $\norm{T}=\sup_{\norm{x}\le 1}\norm{T(x)}=\sup_{\norm{x}=1}\norm{T(x)}$, donc $\norm{T(x)}_F\le\norm{T}\,\norm{x}_E$. On note $\mathcal L(E)=\mathcal L(E;E)$. (poly, formule (V.1.1), p. 93)

## CARD id=fc-ch05-003 ref=ch05-lef-banach-norme-algebre tags=enonce
### Q
Énoncer : norme et complétude de $\mathcal L(E;F)$, et propriété de la norme d'opérateur par rapport à la composition.
### R
$\norm{\cdot}_{\mathcal L(E;F)}$ est une norme sur $\mathcal L(E;F)$ ; si $F$ est un espace de **Banach** (aucune hypothèse sur $E$), alors $\mathcal L(E;F)$ est un espace de Banach. Si $A\in\mathcal L(F;G)$ et $B\in\mathcal L(E;F)$, alors $AB\in\mathcal L(E;G)$ et $\norm{AB}\le\norm{A}\,\norm{B}$ ; en particulier la norme est une norme d'algèbre sur $\mathcal L(E)$. (poly, §V.1.2, p. 93)

## CARD id=fc-ch05-004 ref=ch05-isometrie-bilineaire-curryfication tags=enonce
### Q
Énoncer l'isométrie canonique entre $\mathcal L(E_1,E_2;F)$ et $\mathcal L(E_1;\mathcal L(E_2;F))$. À quoi sert-elle ?
### R
L'application $\Phi:\mathcal L(E_1,E_2;F)\to\mathcal L(E_1;\mathcal L(E_2;F))$, $\Phi(f)(x)(y)=f(x,y)$, est linéaire, bien définie, et c'est une **isométrie** ($\norm{\Phi(f)}=\norm{f}$), d'inverse $\Psi(g)(x,y)=g(x)(y)$. Elle permet de voir $d^2f_a=d(df)_a\in\mathcal L(E;\mathcal L(E;F))$ comme une application **bilinéaire** $E\times E\to F$. (poly, §V.1.4, p. 94)

## CARD id=fc-ch05-005 ref=ch05-baire tags=enonce
### Q
Énoncer le théorème de Baire.
### R
Dans un espace métrique **complet**, la réunion d'une famille **dénombrable** de fermés d'intérieur vide est d'intérieur vide. De façon équivalente : une intersection dénombrable d'ouverts denses est dense. (poly, Théorème V.2.1, p. 96)

## CARD id=fc-ch05-006 ref=ch05-application-ouverte tags=enonce
### Q
Énoncer le théorème de l'application ouverte.
### R
Soient $E$ et $F$ des espaces de **Banach** et $f:E\to F$ linéaire, **continue** et **surjective**. Alors l'image par $f$ de tout ouvert de $E$ est un ouvert de $F$. (La preuve établit : il existe $c>0$ tel que $B_F(0,c)\subset f(B_E(0,1))$.) (poly, Théorème V.2.2, p. 96)

## CARD id=fc-ch05-007 ref=ch05-application-ouverte tags=hypothese,contre-exemple
### Q
Dans les théorèmes de l'application ouverte / du graphe fermé, que se passe-t-il si l'on retire la complétude ou la surjectivité ? Donner des contre-exemples.
### R
* $F$ non complet : $\mathrm{Id}:(C([0,1]),\norm{\cdot}_\infty)\to(C([0,1]),\norm{\cdot}_1)$ est linéaire, continue, bijective, mais son inverse n'est pas continu (donc l'application n'est pas ouverte).
* Non surjective : l'inclusion $\ell^1\hookrightarrow\ell^2$ est continue injective mais l'image de la boule unité n'est pas ouverte dans $\ell^2$.
* Graphe fermé sans complétude : la dérivation $D:(C^1([0,1]),\norm{\cdot}_\infty)\to C([0,1])$ a un graphe fermé mais n'est pas continue (l'espace de départ n'est pas complet).

## CARD id=fc-ch05-008 ref=ch05-isomorphisme-banach tags=enonce
### Q
Énoncer le théorème d'isomorphisme de Banach.
### R
Soient $E$, $F$ des espaces de Banach et $f:E\to F$ un isomorphisme linéaire **continu**. Alors $f^{-1}:F\to E$ est continu. Plus précisément, si $c>0$ vérifie $B_F(0,c)\subset f(B_E(0,1))$, alors $\norm{f^{-1}}\le\frac1c$. (poly, Théorème V.2.3, p. 97)

## CARD id=fc-ch05-009 ref=ch05-graphe-ferme tags=enonce
### Q
Énoncer le théorème du graphe fermé.
### R
Soient $E$, $F$ des espaces de Banach et $f:E\to F$ **linéaire** (définie sur tout $E$). Alors $f$ est continue si et seulement si son graphe $\mathrm{Graphe}(f)=\{(x,f(x)),\ x\in E\}$ est fermé dans $E\times F$. (poly, Théorème V.2.5, p. 97)

## CARD id=fc-ch05-010 ref=ch05-petit-o-def tags=enonce,definition
### Q
Que signifie $f(x)=o(x)$, et $r(h)=o(h)$ pour $r$ à valeurs dans un evn $F$ ?
### R
Soit $f:U\to\R$ avec $U$ ouvert de $E$ contenant $0$. On écrit $f(x)=o(x)$ si $\forall\eps>0,\ \exists\delta>0$ tel que $x\in B_E(0,\delta)\cap U\Rightarrow \abs{f(x)}<\eps\norm{x}_E$. Pour $r:U\to F$, $r(h)=o(h)$ signifie $\norm{r(h)}_F=o(h)$ ; de même $o(\norm{h}^p)$ signifie $\norm{r(h)}_F\le\eps\norm{h}_E^p$ près de $0$. (poly, §V.3.1, p. 98)

## CARD id=fc-ch05-011 ref=ch05-differentielle-def tags=enonce,definition
### Q
Donner la définition de « $f$ différentiable en $a$ », de la différentielle $df_a$, de « $f$ différentiable sur $U$ » et de « $f$ de classe $C^1$ sur $U$ ».
### R
Soient $E,F$ des evn, $U$ un ouvert de $E$, $f:U\to F$. $f$ est **différentiable en $a\in U$** s'il existe $df_a:E\to F$ **linéaire continue** telle que
$$\norm{f(a+h)-f(a)-df_a(h)}_F=o(h).\qquad\text{(V.3.1)}$$
Elle est unique : c'est la différentielle de $f$ en $a$. $f$ est différentiable sur $U$ si elle l'est en tout point ; $f$ est de **classe $C^1$** si elle est différentiable sur $U$ et si $df:U\to\mathcal L(E;F)$, $a\mapsto df_a$, est continue (pour la norme d'opérateur). (poly, Définition V.3.1, p. 98)

## CARD id=fc-ch05-012 ref=ch05-differentielle-def tags=hypothese
### Q
Dans la Définition V.3.1, pourquoi exiger que $df_a$ soit continue ? Et pourquoi $U$ ouvert ?
### R
$U$ ouvert : pour que $a+h\in U$ dès que $\norm h$ est petit (sinon $f(a+h)$ n'a pas de sens, et les dérivées directionnelles non plus). $df_a$ continue : en dimension finie c'est automatique, mais en dimension infinie une application linéaire vérifiant (V.3.1) peut ne pas être continue ; or, (V.3.1) seule donne : $f$ continue en $a$ $\iff$ $df_a$ continue. Exiger $df_a$ continue assure donc que $f$ est continue en $a$ (Remarque V.3.2). (poly, Définition V.3.1 et Remarque V.3.2, p. 98)

## CARD id=fc-ch05-013 ref=ch05-differentielle-def tags=contre-exemple
### Q
Donner une fonction continue en $0$, dont toutes les dérivées directionnelles existent en $0$, mais qui n'est pas différentiable en $0$.
### R
$f(x,y)=\dfrac{x^3}{x^2+y^2}$, $f(0,0)=0$. Continue ($\abs{f}\le\abs{x}$) et, pour $h=(h_1,h_2)$, $\lim_{t\to0}\frac{f(th)}{t}=\frac{h_1^3}{h_1^2+h_2^2}$ n'est **pas linéaire en $h$**. Si $df_0$ existait on aurait $df_0(h)=\lim_{t\to0}\frac{f(th)}{t}$, linéaire : contradiction. (Attention : $x\mapsto\abs x$ ou la norme euclidienne en $0$ sont continues et non différentiables, mais elles ne répondent pas à la question : $\lim_{t\to0}\frac{\abs{th}}{t}$ n'existe pas, donc leurs dérivées directionnelles n'existent pas en $0$.) (poly, §V.3.1, p. 98)

## CARD id=fc-ch05-014 ref=ch05-derivee-directionnelle-unicite tags=enonce,formule
### Q
Si $f$ est différentiable en $a$, comment retrouve-t-on $df_a(h)$ comme une limite ? Qu'en déduit-on pour l'unicité ? La réciproque est-elle vraie ?
### R
$$df_a(h)=\lim_{t\to0}\frac{f(a+th)-f(a)}{t}\qquad(h\in E)$$
(bien défini car $a+th\in U$ pour $\abs t$ petit, $U$ ouvert). Donc $df_a$ est déterminée par les dérivées directionnelles : unicité. **Réciproque fausse** : l'existence de toutes les dérivées directionnelles n'implique pas la différentiabilité, même si elles dépendent linéairement de $h$. Ex. : $f(x,y)=\frac{x^3y}{x^4+y^2}$, $f(0,0)=0$, est continue ($\abs f\le\frac{\abs x}{2}$ car $x^4+y^2\ge2x^2\abs y$), toutes ses dérivées directionnelles en $0$ sont nulles ($\frac{f(th)}{t}=\frac{t\,h_1^3h_2}{t^2h_1^4+h_2^2}\to0$), donc le seul candidat est $df_0=0$ ; mais $f(x,x^2)=\frac x2$ n'est pas un $o(\norm{(x,x^2)})$ : $f$ n'est pas différentiable en $0$. (Autre exemple, non continu et à dérivées directionnelles non linéaires : $\frac{x^2y}{x^4+y^2}$.) (poly, §V.3.1, p. 98)

## CARD id=fc-ch05-015 ref=ch05-differentiable-implique-continue tags=enonce
### Q
Énoncer le lien entre différentiabilité et continuité en un point (Remarque V.3.2).
### R
Si $f$ est différentiable en $a$ (avec $df_a$ **continue**, comme exigé dans la définition), alors $f$ est continue en $a$. Alternativement, on peut exiger la continuité de $f$ en $a$ dans la définition : une application linéaire $df_a$ vérifiant (V.3.1) est alors nécessairement continue. En dimension finie toute application linéaire est continue. La réciproque (continue $\Rightarrow$ différentiable) est fausse : $x\mapsto\abs x$ en $0$. (poly, Remarque V.3.2, p. 98)

## CARD id=fc-ch05-016 ref=ch05-derivee-variable-reelle tags=enonce,notation
### Q
Pour $f:U\to F$ avec $U$ ouvert de $\R$ et $f$ différentiable en $a$, que sont $df_a$ et $f'(a)$ ?
### R
$df_a\in\mathcal L(\R;F)$, canoniquement isomorphe à $F$ par $T\mapsto T(1)$ (Exercice V.1.2). On identifie $df_a$ au **vecteur** $f'(a):=df_a(1)\in F$ (vecteur tangent), de sorte que $df_a(t)=t\,f'(a)$. (poly, Exemple V.3.4, p. 98)

## CARD id=fc-ch05-017 ref=ch05-differentielle-lineaire tags=enonce,formule
### Q
Quelle est la différentielle d'une application linéaire continue $f:E\to F$ ?
### R
$f$ est partout différentiable et $df_{x_0}=f$ pour tout $x_0\in E$, car $f(x_0+h)-f(x_0)-f(h)=0$. (poly, Exemple V.3.5, p. 99)

## CARD id=fc-ch05-018 ref=ch05-differentielle-bilineaire tags=enonce,formule
### Q
Quelle est la différentielle d'une application bilinéaire continue $f:E_1\times E_2\to F$ en $(a,b)$ ? (norme sur le produit ?)
### R
Avec $\norm{(x,y)}_{E}=\norm{x}_{E_1}+\norm{y}_{E_2}$ :
$$df_{(a,b)}(h,k)=f(a,k)+f(h,b).$$
Preuve : $f(a+h,b+k)-f(a,b)-df_{(a,b)}(h,k)=f(h,k)$ et $\norm{f(h,k)}\le\norm f\,\norm h\,\norm k=o((h,k))$. (poly, Exemple V.3.6, p. 99)

## CARD id=fc-ch05-019 ref=ch05-gradient-hilbert tags=enonce,definition
### Q
Définir le gradient d'une fonction $f:U\to\R$ différentiable en $a$ dans un espace de Hilbert $E$.
### R
Par le théorème de représentation de Riesz appliqué à la forme linéaire continue $df_a:E\to\R$, il existe un **unique** vecteur $\nabla f(a)\in E$ tel que $\langle\nabla f(a),h\rangle_E=df_a(h)$ pour tout $h\in E$. C'est le gradient de $f$ en $a$ ; il dépend du produit scalaire choisi, alors que $df_a$ n'en dépend pas. (poly, Exemple V.3.8, p. 99)

## CARD id=fc-ch05-020 ref=ch05-linearite-differentielle tags=enonce
### Q
Énoncer la linéarité de la différentielle.
### R
Si $f,g:U\to F$ sont différentiables en $a\in U$ ($U$ ouvert de $E$) et $\lambda,\mu\in\R$, alors $\lambda f+\mu g$ est différentiable en $a$ et $d(\lambda f+\mu g)_a=\lambda\,df_a+\mu\,dg_a$. (poly, Proposition V.3.11, p. 99)

## CARD id=fc-ch05-021 ref=ch05-composition-differentielles tags=enonce,formule
### Q
Énoncer la règle de composition (règle de la chaîne) pour les différentielles.
### R
Soient $E,F,G$ des evn, $U$ ouvert de $E$, $f:U\to F$ différentiable en $a\in U$, $V$ ouvert de $F$ contenant $f(a)$, $g:V\to G$ différentiable en $f(a)$. Alors $g\circ f$ est différentiable en $a$ et
$$d(g\circ f)_a=dg_{f(a)}\circ df_a.$$
(poly, Proposition V.3.12, p. 100)

## CARD id=fc-ch05-022 ref=ch05-composition-differentielles tags=hypothese,contre-exemple
### Q
Dans la règle de composition, où faut-il que $g$ soit différentiable ? Que dit un exemple pour la réciproque ?
### R
$g$ doit être différentiable **en $f(a)$** (pas en $a$) et $dg$ est évaluée en $f(a)$ ; l'ordre est $dg_{f(a)}\circ df_a$. La réciproque est fausse : $f(x)=x^2$, $g=\abs{\cdot}$, $a=0$ : $g\circ f=x^2$ est dérivable en $0$ alors que $g$ n'est pas différentiable en $f(0)=0$ (la formule n'a alors aucun sens).

## CARD id=fc-ch05-023 ref=ch05-composition-differentielles tags=formule
### Q
Écrire la règle de composition avec les matrices jacobiennes, et en dérivées partielles, pour $f:\R^m\to\R^n$ et $g:\R^n\to\R^q$.
### R
$J_{g\circ f}(a)=J_g(f(a))\,J_f(a)$ (produit de matrices, dans cet ordre, $J_g$ prise en $f(a)$), soit
$$\frac{\partial (g\circ f)_k}{\partial x_i}(a)=\sum_{j=1}^n\frac{\partial g_k}{\partial y_j}(f(a))\,\frac{\partial f_j}{\partial x_i}(a).$$
(conséquence de la Proposition V.3.12, p. 100, et de la formule (V.3.4), p. 103)

## CARD id=fc-ch05-024 ref=ch05-vecteur-tangent-courbe tags=enonce
### Q
Que fait $df_a$ aux vecteurs tangents aux courbes ? (énoncé de la Remarque V.3.13)
### R
Soit $f:U\to F$ différentiable en $a$ et $\alpha:\,]-\eps;\eps[\,\to E$ de classe $C^1$ avec $\alpha(0)=a$, $h=\alpha'(0)$. Alors $\beta=f\circ\alpha$ est différentiable en $0$ et $\beta'(0)=df_a(\alpha'(0))=df_a(h)$ : $df_a$ envoie le vecteur tangent en $0$ à $\alpha$ sur le vecteur tangent en $0$ à $f\circ\alpha$. (poly, Remarque V.3.13, p. 100)

## CARD id=fc-ch05-025 ref=ch05-differentiabilite-composantes tags=enonce
### Q
Énoncer la différentiabilité d'une application à valeurs dans un produit, composante par composante.
### R
Soit $f:U\to F=F_1\times\cdots\times F_n$ ($U$ ouvert de $E$), $f_i=p_i\circ f$. Alors $f$ est différentiable en $a$ **si et seulement si** chaque $f_i$ l'est, et $df_a=\sum_{i=1}^n\iota_i\circ(df_i)_a$, c'est-à-dire $(df_i)_a=p_i\circ df_a$ ($p_i$, $\iota_i$ : projections et injections canoniques). C'est une équivalence pour les composantes à l'**arrivée**, seulement une implication pour les variables au départ. (poly, Proposition V.3.15, p. 101)

## CARD id=fc-ch05-026 ref=ch05-formule-leibniz tags=enonce,formule
### Q
Énoncer la formule de Leibniz pour $g(x)=b(f_1(x),f_2(x))$.
### R
Soient $f_1:U\to F_1$, $f_2:U\to F_2$ différentiables en $a$ et $b:F_1\times F_2\to G$ **bilinéaire continue**. Alors $g=b(f_1,f_2)$ est différentiable en $a$ et
$$dg_a(h)=b\big((df_1)_a(h),f_2(a)\big)+b\big(f_1(a),(df_2)_a(h)\big).$$
(poly, Exemple V.3.16, p. 101)

## CARD id=fc-ch05-027 ref=ch05-formule-leibniz tags=formule
### Q
Différentielle de $A\mapsto A^2$ et de $A\mapsto A^n$ sur $M_m(\R)$ ? Piège ?
### R
$d(A\mapsto A^2)_A(H)=AH+HA$ (et **non** $2AH$ : le produit matriciel n'est pas commutatif). Plus généralement $d(A\mapsto A^n)_A(H)=\sum_{k=0}^{n-1}A^kHA^{n-1-k}$. (poly, Exemple V.3.16, p. 101 ; Exercice V.6.2, p. 112)

## CARD id=fc-ch05-028 ref=ch05-differentielles-partielles tags=enonce
### Q
Énoncer la proposition sur les dérivées partielles d'une application différentiable sur un produit $E=E_1\times\cdots\times E_m$.
### R
Si $f:U\to F$ est différentiable en $a$, alors chaque application partielle $f_{[i]}:x_i\mapsto f(a_1,\dots,x_i,\dots,a_m)$ est différentiable en $a_i$ ; sa différentielle $\frac{\partial f}{\partial x_i}(a)\in\mathcal L(E_i;F)$ vérifie $\frac{\partial f}{\partial x_i}(a)=df_a\circ\iota_i$ et
$$df_a(h_1,\dots,h_m)=\sum_{i=1}^m\frac{\partial f}{\partial x_i}(a)(h_i).\qquad\text{(V.3.3)}$$
(poly, Proposition V.3.17, p. 102)

## CARD id=fc-ch05-029 ref=ch05-differentielles-partielles tags=hypothese,contre-exemple
### Q
La réciproque de la Proposition V.3.17 est-elle vraie ? (existence des dérivées partielles $\Rightarrow$ différentiable ?)
### R
Non : $f(x,y)=\frac{xy}{x^2+y^2}$, $f(0,0)=0$ a ses deux dérivées partielles nulles en $0$ ($f$ est nulle sur les axes), mais $f(t,t)=\frac12\not\to0$ : $f$ n'est pas continue en $0$, donc pas différentiable. Il faut en plus la continuité des dérivées partielles (Proposition V.5.1). (poly, Remarque V.3.18, p. 102)

## CARD id=fc-ch05-030 ref=ch05-partielles-sans-differentiabilite tags=enonce,contre-exemple
### Q
Que dit la Remarque V.3.18 ? Donner une fonction dont toutes les dérivées directionnelles existent en $0$ mais qui n'est pas continue en $0$.
### R
L'existence des dérivées partielles en un point n'implique pas la différentiabilité en ce point (la Proposition V.3.17 n'est qu'une implication, contrairement à la Proposition V.3.15). Exemple : $f(x,y)=\frac{x^2y}{x^4+y^2}$, $f(0,0)=0$ : $\lim_{t\to0}\frac{f(th)}{t}=\frac{h_1^2}{h_2}$ si $h_2\ne0$, $0$ si $h_2=0$ (existe, non linéaire en $h$), mais $f(t,t^2)=\frac12$ : $f$ n'est pas continue en $0$. (poly, Remarque V.3.18, p. 102)

## CARD id=fc-ch05-031 ref=ch05-matrice-jacobienne tags=enonce,definition,formule
### Q
Définir la matrice jacobienne et le jacobien d'une application $f:\R^m\to\R^n$ différentiable en $a$. Dimensions ? Lignes/colonnes ?
### R
La matrice de $df_a$ dans les bases canoniques est $\Big(\frac{\partial f_j}{\partial x_i}(a)\Big)_{j,i}$ : $n$ **lignes** (composantes $f_j$) et $m$ **colonnes** (variables $x_i$) ; $df_a(h)$ est son produit par le vecteur colonne $h=(h_1,\dots,h_m)^\top$ (formule (V.3.4)). La ligne $j$ est le gradient de $f_j$ ; la colonne $i$ est $\frac{\partial f}{\partial x_i}(a)\in\R^n$. Si $n=m$, son déterminant $\mathrm{Jac}(f)(a)$ est le **jacobien**. (poly, §V.3.5, p. 103)

## CARD id=fc-ch05-032 ref=ch05-accroissements-finis-vectoriel tags=enonce
### Q
Énoncer l'inégalité des accroissements finis pour $f:[a;b]\to F$ (théorème V.4.1).
### R
Soient $a<b$ réels, $F$ un evn, $f:[a;b]\to F$ et $g:[a;b]\to\R$ **continues sur $[a;b]$** et différentiables sur $]a;b[$. Si $\norm{f'(t)}_F\le g'(t)$ pour tout $t\in\,]a;b[$, alors $\norm{f(b)-f(a)}_F\le g(b)-g(a)$. (poly, Théorème V.4.1, p. 103)

## CARD id=fc-ch05-033 ref=ch05-accroissements-finis-vectoriel tags=hypothese,contre-exemple
### Q
Peut-on avoir une égalité des accroissements finis $f(b)-f(a)=(b-a)f'(c)$ pour $f$ à valeurs vectorielles ? Que se passe-t-il sans continuité aux bornes ?
### R
Non en général : $f(t)=e^{it}\in\C\simeq\R^2$ sur $[0;2\pi]$ : $f(2\pi)-f(0)=0$ mais $\norm{f'(t)}=1$ pour tout $t$. On n'a qu'une **inégalité**. Sans continuité en $a,b$ : $f=\mathbf 1_{\{b\}}$, $g=0$ vérifient $\norm{f'}\le g'$ sur $]a;b[$ mais $\norm{f(b)-f(a)}=1>0$.

## CARD id=fc-ch05-034 ref=ch05-accroissements-finis-borne tags=enonce
### Q
Énoncer l'inégalité des accroissements finis à borne constante (Corollaire V.4.3).
### R
Soient $a<b$ réels, $F$ evn, $f:[a;b]\to F$ continue sur $[a;b]$, différentiable sur $]a;b[$ avec $\norm{f'(t)}_F\le k$ pour tout $t\in\,]a;b[$. Alors $\norm{f(b)-f(a)}_F\le k\,(b-a)$. (Cas $g(t)=kt$ du Théorème V.4.1 ; avec $k=0$ : $f'=0$ sur $]a;b[$ $\Rightarrow$ $f$ constante.) (poly, Corollaire V.4.3, p. 104)

## CARD id=fc-ch05-035 ref=ch05-accroissements-finis tags=enonce
### Q
Énoncer le théorème des accroissements finis (TAF) dans les evn.
### R
Soient $E,F$ des evn, $U$ ouvert de $E$, $f:U\to F$ **différentiable sur $U$**, $a,b\in U$. Si le segment $[a,b]=\{ta+(1-t)b,\ t\in[0,1]\}$ est contenu dans $U$, alors
$$\norm{f(b)-f(a)}_F\le\sup_{t\in[0,1]}\norm{df_{ta+(1-t)b}}\times\norm{b-a}_E .$$
En particulier si $U$ est convexe et $\sup_U\norm{df_x}\le k$, alors $\norm{f(b)-f(a)}_F\le k\,\norm{b-a}_E$ pour tous $a,b\in U$. (poly, Théorème V.4.4, p. 104)

## CARD id=fc-ch05-036 ref=ch05-accroissements-finis tags=hypothese,contre-exemple
### Q
Dans le TAF, que se passe-t-il si le segment $[a,b]$ n'est pas contenu dans $U$ ? Donner un contre-exemple.
### R
L'inégalité peut échouer. $U=\{z\in\C\setminus\R_-,\ \abs z>\tfrac12\}$ (ouvert, non convexe), $f=$ argument principal (fonction $C^\infty$ sur $U$, avec $\norm{df_z}=\frac1{\abs z}\le2$, donc $\sup_U\norm{df}\le2$), $a=-1+i\eps$, $b=-1-i\eps$ : $f(a)\to\pi$ et $f(b)\to-\pi$, donc $\abs{f(b)-f(a)}\to2\pi$, alors que $\sup_U\norm{df}\,\abs{b-a}\le4\eps\to0$. Le segment $[a,b]$ coupe $\R_-$ donc sort de $U$ : sur un ouvert non convexe, on ne peut pas majorer $\norm{f(b)-f(a)}$ par $\sup_U\norm{df}\,\norm{b-a}$ pour des points quelconques.

## CARD id=fc-ch05-037 ref=ch05-accroissements-finis tags=contre-exemple
### Q
Existe-t-il $c\in[a,b]$ avec $f(b)-f(a)=df_c(b-a)$ pour $f:U\to F$ différentiable ?
### R
Pas en général dès que $\dim F\ge2$ : $t\mapsto(\cos t,\sin t)$ sur $[0,2\pi]$ donne $f(2\pi)-f(0)=0$ alors que $df_c(2\pi)\neq0$ pour tout $c$. Le TAF vectoriel est une **inégalité** : on raisonne avec $\sup\norm{df}$ sur le segment.

## CARD id=fc-ch05-038 ref=ch05-differentielle-nulle-constante tags=enonce
### Q
Énoncer : différentielle nulle $\Rightarrow$ constante. Quelle hypothèse topologique, et un contre-exemple si on la retire ?
### R
Soit $f:U\to F$ différentiable sur l'ouvert $U$ de $E$. Si $U$ est **connexe** et $df_x=0$ pour tout $x\in U$, alors $f$ est constante. Sans connexité : $U=\,]0;1[\cup]2;3[$, $f=0$ sur le premier intervalle et $1$ sur le second : $df=0$ mais $f$ non constante. (poly, Corollaire V.4.5, p. 104)

## CARD id=fc-ch05-039 ref=ch05-primitive-integrale tags=enonce
### Q
Énoncer le théorème sur la dérivée d'une primitive (intégrale à valeurs dans un Banach).
### R
Soit $g:[a;b]\to F$ continue, $F$ espace de **Banach**, $t_0\in[a;b]$ et $G(t)=\int_{t_0}^tg(u)\,du$. Alors $G$ est continue sur $[a;b]$, de classe $C^1$ sur $]a;b[$, et $G'(t)=g(t)$ pour tout $t\in\,]a;b[$. (poly, Théorème V.4.6, p. 105)

## CARD id=fc-ch05-040 ref=ch05-theoreme-fondamental tags=enonce,formule
### Q
Énoncer le théorème fondamental du calcul différentiel.
### R
Soient $E$ evn, $F$ espace de **Banach**, $f:U\to F$ de classe $C^1$ sur l'ouvert $U$ de $E$, $x\in U$, $y\in E$ tels que $x+ty\in U$ pour tout $t\in[0;1]$. Alors
$$f(x+y)=f(x)+\int_0^1df_{x+ty}(y)\,dt.$$
(poly, Théorème V.4.7, p. 105)

## CARD id=fc-ch05-041 ref=ch05-theoreme-fondamental tags=hypothese
### Q
Dans le théorème fondamental V.4.7, quel est le rôle de « $C^1$ », de « $F$ de Banach » et du segment dans $U$ ?
### R
$C^1$ : $t\mapsto df_{x+ty}(y)$ est alors continue, donc intégrable (Théorème V.4.6) ; si $f$ est seulement différentiable, cette fonction peut ne pas être réglée (ex. $t^2\sin(1/t^2)$ a une dérivée non bornée, pas d'intégrale de Riemann). $F$ Banach : pour que l'intégrale vectorielle existe. Segment dans $U$ : pour que $f(x+ty)$ et $df_{x+ty}$ aient un sens. La preuve : $g(t)=f(x+ty)$ est $C^1$ avec $g'(t)=df_{x+ty}(y)$ (composition), puis V.4.6 et V.4.3.

## CARD id=fc-ch05-042 ref=ch05-classe-ck-def tags=enonce,definition
### Q
Définir « $f$ de classe $C^k$ » ($k\in\N\cup\{\infty\}$) pour $f:U\to F$.
### R
Par récurrence : $C^0$ : $f$ continue ; $C^1$ : $f$ différentiable et $df:U\to\mathcal L(E;F)$ continue ; $C^k$ ($k\ge2$) : $f$ différentiable et $df:U\to\mathcal L(E;F)$ est de classe $C^{k-1}$ (on itère avec $\mathcal L(E;\mathcal L(E;F))$, etc.) ; $C^\infty$ : $C^k$ pour tout $k$. « $C^k$ » est strictement plus fort que « $k$ fois différentiable » (ex. $x^2\sin(1/x)$ : différentiable partout, pas $C^1$ en $0$). (poly, §V.5.1, p. 106)

## CARD id=fc-ch05-043 ref=ch05-c1-ssi-partielles-continues tags=enonce
### Q
Énoncer le critère de classe $C^1$ par les dérivées partielles (Proposition V.5.1).
### R
Soit $E=E_1\times\cdots\times E_m$, $U$ ouvert de $E$, $f:U\to F$ (evn). $f$ est de classe $C^1$ sur $U$ **si et seulement si** les dérivées partielles $\frac{\partial f}{\partial x_i}$ existent en tout point de $U$ et sont continues ($U\to\mathcal L(E_i;F)$). De plus, pour que $f$ soit différentiable en $a$, il suffit que les dérivées partielles existent sur un **voisinage** de $a$ et soient continues en $a$. (poly, Proposition V.5.1, p. 106)

## CARD id=fc-ch05-044 ref=ch05-c1-ssi-partielles-continues tags=hypothese,contre-exemple
### Q
Dans la Proposition V.5.1, que se passe-t-il sans continuité des dérivées partielles ? Sans existence sur un voisinage ?
### R
La continuité des dérivées partielles est suffisante, pas nécessaire pour la différentiabilité en un point : $f(x,y)=(x^2+y^2)\sin\frac{1}{x^2+y^2}$, $f(0)=0$, est différentiable en $0$ ($\abs{f(h)}\le\norm h^2$, donc $df_0=0$) mais $\partial_xf$ n'est pas continue en $0$ ($f$ n'est pas $C^1$). Sans continuité en $a$ : $\frac{xy}{x^2+y^2}$ ($0$ en $0$) a des dérivées partielles en **tout** point de $\R^2$ (donc sur un voisinage de $0$), mais elles sont discontinues en $0$ et $f$ n'est pas différentiable en $0$ (pas même continue). Sans existence sur un voisinage : la condition « continues en $a$ » n'a plus de sens ; ex. $f=1$ hors des axes, $f=0$ sur les axes : $\partial_xf(0)=\partial_yf(0)=0$ mais $f$ est discontinue en $0$ (et ses dérivées partielles n'existent en aucun point $(x,0)$, $x\ne0$). L'existence sur un voisinage sert dans la preuve à appliquer le TAF aux applications partielles (chemin en escalier).

## CARD id=fc-ch05-045 ref=ch05-differentielle-seconde-def tags=enonce,definition,formule
### Q
Définir la différentielle seconde $d^2f_a$ et la lire comme application bilinéaire : que valent $d^2f_a(u,v)$ ?
### R
Si $f:U\to F$ est $C^1$ et $df:U\to\mathcal L(E;F)$ est différentiable en $a$, $d^2f_a:=d(df)_a\in\mathcal L(E;\mathcal L(E;F))\simeq\mathcal L(E,E;F)$, d'où une application bilinéaire continue
$$d^2f_a(u,v)=\big(d(df)_a(u)\big)(v)=\lim_{t\to0}\frac{df_{a+tu}(v)-df_a(v)}{t}.$$
La première variable $u$ est la direction de dérivation de $df$, la seconde $v$ la direction où on évalue. De même $d^pf_a$ est $p$-linéaire continue. (poly, §V.5.3, p. 107)

## CARD id=fc-ch05-046 ref=ch05-lemme-schwarz tags=enonce
### Q
Énoncer le lemme de Schwarz.
### R
Soit $f:U\to F$ de classe $C^1$ sur l'ouvert $U$ de $E$, telle que $df:U\to\mathcal L(E;F)$ soit **différentiable au point $a$**. Alors $d^2f_a$ est **symétrique** : $d^2f_a(u,v)=d^2f_a(v,u)$ pour tous $u,v\in E$. (poly, Théorème V.5.3, p. 107)

## CARD id=fc-ch05-047 ref=ch05-lemme-schwarz tags=hypothese
### Q
Quelle est l'hypothèse exacte dans le lemme de Schwarz ? L'existence des dérivées secondes croisées suffit-elle ?
### R
Il faut que $f$ soit $C^1$ et que $df$ soit différentiable en $a$ (vrai en particulier si $f$ est $C^2$). L'existence des seules dérivées partielles secondes croisées en $a$ ne suffit pas : la symétrie vient de la différentiabilité de $df$ en $a$ (preuve par le « second accroissement » $g_{u,v}(t,s)=f(a+tu+sv)-f(a+sv)-f(a+tu)+f(a)$, symétrique par construction, et le TAF). (poly, Théorème V.5.3, p. 107)

## CARD id=fc-ch05-048 ref=ch05-lemme-schwarz tags=contre-exemple
### Q
Donner un contre-exemple à la symétrie des dérivées croisées quand $df$ n'est pas différentiable en $a$.
### R
$f(x,y)=\dfrac{xy(x^2-y^2)}{x^2+y^2}$, $f(0,0)=0$ : $f$ est $C^1$ sur $\R^2$, $\partial_xf(0,y)=-y$ et $\partial_yf(x,0)=x$, donc les deux dérivées croisées en $0$ existent et valent $-1$ ($\partial_y\partial_xf$) et $+1$ ($\partial_x\partial_yf$) : elles sont différentes. Ici $df$ n'est pas différentiable en $0$.

## CARD id=fc-ch05-049 ref=ch05-differentielle-ordre-p-symetrique tags=enonce
### Q
Énoncer la symétrie de la différentielle d'ordre $p$.
### R
Soit $f:U\to F$ de classe $C^{p-1}$ ($p\ge2$) sur l'ouvert $U$ de $E$, et $a\in U$ tel que $d^{p-1}f$ soit différentiable en $a$. Alors $d^pf_a$ est $p$-linéaire **symétrique** : $d^pf_a(h_1,\dots,h_p)=d^pf_a(h_{\sigma(1)},\dots,h_{\sigma(p)})$ pour toute permutation $\sigma\in\mathfrak S_p$. (poly, Théorème V.5.5, p. 108)

## CARD id=fc-ch05-050 ref=ch05-formule-pratique-dpf tags=enonce,formule
### Q
Donner la formule pratique pour calculer $d^pf_a(h_1,\dots,h_p)$ et $d^pf_a(h,\dots,h)$.
### R
Pour $f$ de classe $C^p$ :
$$d^pf_a(h_1,\dots,h_p)=\frac{\partial}{\partial t_1}\cdots\frac{\partial}{\partial t_p}\Big[(t_1,\dots,t_p)\mapsto f\Big(a+\sum_{i=1}^pt_ih_i\Big)\Big]_{t_1=\dots=t_p=0},$$
en particulier $d^pf_a(h,\dots,h)=\frac{d^p}{dt^p}\big[f(a+th)\big]_{t=0}$. (poly, Remarque V.5.6, p. 109)

## CARD id=fc-ch05-051 ref=ch05-serie-neumann tags=enonce,formule
### Q
Énoncer le résultat sur la série de Neumann.
### R
Soit $E$ un espace de **Banach** et $h\in\mathcal L(E)$ avec $\norm h<1$. Alors $\mathrm{Id}_E-h$ est inversible dans $\mathcal L(E)$ et
$$(\mathrm{Id}_E-h)^{-1}=\sum_{n=0}^{+\infty}h^n\quad(\text{série normalement convergente}),\qquad \norm{(\mathrm{Id}_E-h)^{-1}-\mathrm{Id}_E}\le\frac{\norm h}{1-\norm h}.$$
(poly, §V.5.4, p. 109)

## CARD id=fc-ch05-052 ref=ch05-inversion-c-infini tags=enonce
### Q
Énoncer le théorème : l'inversion est $C^\infty$ sur $\mathrm{Iso}(E;F)$.
### R
Soient $E,F$ des espaces de **Banach**. L'ensemble $\mathrm{Iso}(E;F)$ des isomorphismes linéaires bicontinus de $E$ sur $F$ est un **ouvert** de $\mathcal L(E;F)$, et $\Psi:\mathrm{Iso}(E;F)\to\mathrm{Iso}(F;E)$, $f\mapsto f^{-1}$, est de classe $C^\infty$, de différentielle
$$d\Psi_f(g)=-f^{-1}\circ g\circ f^{-1}\qquad(g\in\mathcal L(E;F)).$$
(poly, Théorème V.5.7, p. 109)

## CARD id=fc-ch05-053 ref=ch05-inversion-c-infini tags=formule
### Q
Retrouver rapidement la formule $d\Psi_f(g)=-f^{-1}gf^{-1}$ et dire à quoi elle se réduit en dimension 1. Piège ?
### R
On dérive $f\circ f^{-1}=\mathrm{Id}$ par Leibniz : $g\,f^{-1}+f\,d\Psi_f(g)=0$, d'où $d\Psi_f(g)=-f^{-1}gf^{-1}$. En dimension 1 (réels) on retrouve $d(x\mapsto1/x)_x(g)=-g/x^2$. Piège : en général les opérateurs ne commutent pas, donc on ne peut pas écrire $-f^{-2}g$ ni $-g/f^2$. (poly, Théorème V.5.7, p. 109)

## CARD id=fc-ch05-054 ref=ch05-inversion-c-infini tags=hypothese,contre-exemple
### Q
Dans le Théorème V.5.7, où sert la complétude de $E$ et $F$ ? Que devient la série de Neumann sans complétude ?
### R
Elle sert à la convergence de $\sum h^n$ dans $\mathcal L(E)$ (Proposition V.1.1 : série absolument convergente $\Rightarrow$ convergente), donc à l'inversibilité de $\mathrm{Id}-h$ pour $\norm h<1$. Contre-exemple sans complétude : $E=$ suites réelles à support fini, norme $\ell^1$, $h=\frac12S$ avec $S(x_0,x_1,\dots)=(0,x_0,x_1,\dots)$ : $\norm h=\frac12<1$ mais $\mathrm{Id}-h$ n'est pas surjective ($e_0$ n'a pour antécédent que $\sum_n2^{-n}e_n$, de support infini), donc non inversible dans $\mathcal L(E)$. (Dans $\mathrm{Iso}(E;F)$ la bicontinuité est automatique, par Banach : Remarque V.5.8.)

## CARD id=fc-ch05-055 ref=ch05-taylor-reste-integral-1d tags=enonce
### Q
Énoncer la formule de Taylor avec reste intégral pour une fonction d'une variable réelle (Lemme V.5.9) et la fonction auxiliaire de la preuve.
### R
Soit $f$ de classe $C^{p+1}$ sur un intervalle ouvert $I\supset\{0,1\}$ à valeurs dans un Banach $F$. Alors
$$f(1)-f(0)-f'(0)-\frac{f''(0)}{2!}-\cdots-\frac{f^{(p)}(0)}{p!}=\int_0^1\frac{(1-t)^p}{p!}f^{(p+1)}(t)\,dt.$$
Preuve : théorème fondamental V.4.7 pour $g(t)=\sum_{k=0}^p\frac{(1-t)^k}{k!}f^{(k)}(t)$, dont la dérivée se télescope en $g'(t)=\frac{(1-t)^p}{p!}f^{(p+1)}(t)$. (poly, Lemme V.5.9, p. 110)

## CARD id=fc-ch05-056 ref=ch05-taylor-reste-integral tags=enonce,formule
### Q
Énoncer la formule de Taylor avec reste intégral dans un evn.
### R
Soit $f$ de classe $C^{p+1}$ sur l'ouvert $U$ de $E$, à valeurs dans un Banach $F$, $a\in U$, $h\in E$ avec $\{a+th,\ t\in[0;1]\}\subset U$. Alors
$$f(a+h)-f(a)-df_a(h)-\frac{d^2f_a(h,h)}{2!}-\cdots-\frac{d^pf_a(h,\dots,h)}{p!}=\int_0^1\frac{(1-t)^p}{p!}\,d^{p+1}f_{a+th}(h,\dots,h)\,dt.$$
(poly, Théorème V.5.11, p. 111)

## CARD id=fc-ch05-057 ref=ch05-taylor-reste-integral tags=hypothese
### Q
Quelles sont les hypothèses de la formule de Taylor avec reste intégral et comment se déduit-elle du cas d'une variable ?
### R
$f$ de classe $C^{p+1}$ (l'intégrande doit être continu), $F$ de **Banach** (pour que l'intégrale existe), segment $[a,a+h]\subset U$. On applique le Lemme V.5.9 à $g(t)=f(a+th)$, avec $g^{(k)}(t)=d^kf_{a+th}(h,\dots,h)$ (Remarque V.5.6). Pour $p=0$ on retrouve le théorème fondamental V.4.7. (poly, Théorème V.5.11, p. 111)

## CARD id=fc-ch05-058 ref=ch05-taylor-lagrange tags=enonce
### Q
Énoncer l'inégalité de Taylor-Lagrange dans un evn.
### R
Soit $f$ $(p+1)$ fois différentiable sur l'ouvert $U$ de $E$, à valeurs dans un evn $F$, avec $\norm{d^{p+1}f_x}\le C$ pour tout $x\in U$. Si $a\in U$, $h\in E$ et $\{a+th,\ t\in[0;1]\}\subset U$, alors
$$\Big\|f(a+h)-f(a)-df_a(h)-\cdots-\frac{d^pf_a(h,\dots,h)}{p!}\Big\|_F\le\frac{C\,\norm h_E^{p+1}}{(p+1)!}.$$
(poly, Théorème V.5.12, p. 111)

## CARD id=fc-ch05-059 ref=ch05-taylor-young tags=enonce
### Q
Énoncer la formule de Taylor-Young.
### R
Soit $p\ge1$, $f:U\to F$ ($p-1$) fois différentiable sur l'ouvert $U$ de $E$ et **$p$ fois différentiable en $a\in U$**. Alors
$$\Big\|f(a+h)-f(a)-df_a(h)-\frac{d^2f_a(h,h)}{2!}-\cdots-\frac{d^pf_a(h,\dots,h)}{p!}\Big\|_F=o(\norm h_E^p).$$
(poly, Théorème V.5.13, p. 111)

## CARD id=fc-ch05-060 ref=ch05-taylor-young tags=hypothese
### Q
Comparer les hypothèses et la conclusion des trois formules de Taylor (reste intégral, Lagrange, Young).
### R
* Reste intégral (V.5.11) : $C^{p+1}$, $F$ Banach, segment dans $U$ ; **égalité** exacte.
* Taylor-Lagrange (V.5.12) : $(p+1)$ fois différentiable, $\norm{d^{p+1}f}\le C$, segment dans $U$ ; **inégalité** globale $\le C\norm h^{p+1}/(p+1)!$.
* Taylor-Young (V.5.13) : $p$ fois différentiable **seulement au point $a$** (et $p-1$ fois sur $U$) ; conclusion **locale** $o(\norm h^p)$, sans constante explicite et non uniforme en $a$. Pour $p=1$ c'est la définition de la différentielle.

## CARD id=fc-ch05-061 ref=none tags=notation
### Q
Notations du poly : $\mathcal L(E;F)$, $\mathcal L(E)$, $\mathcal L(E_1,\dots,E_n;F)$, $\mathcal L(E^{\otimes m};F)$ et normes associées.
### R
$\mathcal L(E;F)$ : applications linéaires continues, de norme $\norm T=\sup_{x\ne0}\norm{T(x)}/\norm x$ ; $\mathcal L(E)=\mathcal L(E;E)$. $\mathcal L(E_1,\dots,E_n;F)$ : applications multilinéaires continues sur $E_1\times\cdots\times E_n$, de norme $\sup_{\bar B_{E_1}\times\cdots\times\bar B_{E_n}}\norm{f(x_1,\dots,x_n)}_F$ (le produit porte la norme somme $\sum\norm{x_i}$). $\mathcal L(E^{\otimes m};F):=\mathcal L(E,\dots,E;F)$ ($m$ facteurs). Le poly écrit un point-virgule : $\mathcal L(E;F)$. (poly, §V.1, pp. 93-95)

## CARD id=fc-ch05-062 ref=none tags=notation
### Q
Distinguer $df$, $df_a$ et $df_a(h)$.
### R
$df:U\to\mathcal L(E;F)$, $a\mapsto df_a$ : l'application différentielle (c'est elle qui est continue pour « $C^1$ », avec la norme d'opérateur). $df_a\in\mathcal L(E;F)$ : application linéaire continue (la différentielle en $a$). $df_a(h)\in F$ : un vecteur, la valeur sur $h\in E$. De même $f'(a)=df_a(1)$ est un vecteur de $F$ pour $f$ d'une variable réelle. (poly, §V.3.1, p. 98)

## CARD id=fc-ch05-063 ref=none tags=notation
### Q
Notations $d^2f_a$, $d^pf_a(h,\dots,h)$, « $p$ fois différentiable ». Que vaut $d^2f_a(h,h)$ sur $\R^m$ ?
### R
$d^2f_a=d(df)_a$, vue comme bilinéaire symétrique ; $d^pf_a(h_1,\dots,h_p)$ est $p$-linéaire symétrique, et $d^pf_a(h,\dots,h)=\frac{d^p}{dt^p}f(a+th)|_{t=0}$. « $f$ est $p$ fois différentiable » : $d^{p-1}f$ est différentiable (sans continuité de $d^pf$), plus faible que $C^p$. Pour $f:U\subset\R^m\to\R$ de classe $C^2$ : $d^2f_a(h,h)=\sum_{i,j}\partial_i\partial_jf(a)h_ih_j=h^\top\mathrm{Hess}f(a)\,h$, où $\mathrm{Hess}f(a)=(\partial_i\partial_jf(a))_{i,j}$ est la matrice (symétrique, par Schwarz) de la forme bilinéaire $d^2f_a$ ; le facteur $1/2!$ de Taylor n'est pas inclus dans $d^2f_a(h,h)$. (poly, §V.5, pp. 107-111)

## CARD id=fc-ch05-064 ref=none tags=notation
### Q
Notations : segment $[a,b]$ vs intervalle $[a;b]$, $\mathrm{Iso}(E;F)$, $\mathrm{Graphe}(f)$, $\norm{\cdot}_0$.
### R
$[a,b]=\{ta+(1-t)b,\ t\in[0,1]\}$ : segment de $E$ ; $[a;b]$ et $]a;b[$ : intervalles de $\R$ (point-virgule). $\mathrm{Iso}(E;F)$ : isomorphismes linéaires bicontinus de $E$ sur $F$ (ouvert de $\mathcal L(E;F)$ si Banach). $\mathrm{Graphe}(f)=\{(x,f(x)),\ x\in E\}\subset E\times F$. $\norm f_0=\sup_{t\in[a;b]}\norm{f(t)}_F$ (norme uniforme), avec $\norm{\int_a^bf}\le(b-a)\norm f_0$. (poly, pp. 97-105)

## CARD id=fc-ch05-065 ref=none tags=notation
### Q
Notations : $f_{[i]}$, $\frac{\partial f}{\partial x_i}(a)$, $p_i$, $\iota_i$, $f_i$. De quel type est $\frac{\partial f}{\partial x_i}(a)$ ?
### R
$p_i:F\to F_i$ et $\iota_i:F_i\to F$ : projection et injection canoniques du produit ($p_i\circ\iota_i=\mathrm{Id}_{F_i}$, $\sum_i\iota_i\circ p_i=\mathrm{Id}_F$) ; $f_i=p_i\circ f$ ; $f_{[i]}:x_i\mapsto f(a_1,\dots,x_i,\dots,a_m)$ ; $\frac{\partial f}{\partial x_i}(a)\in\mathcal L(E_i;F)$ est la différentielle de $f_{[i]}$ en $a_i$ ($=df_a\circ\iota_i$) : c'est un **élément de $\mathcal L(E_i;F)$**, un nombre seulement si $E_i=F=\R$. (poly, §V.3.3-V.3.4, pp. 101-102)

## CARD id=fc-ch05-066 ref=ch05-differentielle-def tags=methode
### Q
Comment montrer qu'une application est différentiable en $a$ et calculer $df_a$ ?
### R
(1) Si $f$ est obtenue par linéarité, composition, Leibniz, composantes : appliquer les règles (V.3.11, V.3.12, V.3.15, V.3.16). (2) Sinon : deviner $df_a(h)=\lim_{t\to0}\frac{f(a+th)-f(a)}{t}$, vérifier que cette limite est **linéaire continue** en $h$, puis **vérifier le $o(h)$** à la main (les dérivées directionnelles ne suffisent pas). (3) En dimension finie, vérifier que les dérivées partielles existent sur un voisinage de $a$ et sont continues en $a$ (V.5.1).

## CARD id=fc-ch05-067 ref=ch05-c1-ssi-partielles-continues tags=methode
### Q
Comment montrer qu'une fonction de plusieurs variables est de classe $C^1$ (ou différentiable en un point singulier comme l'origine) ?
### R
Hors du point singulier : formules usuelles, dérivées partielles continues (V.5.1). Au point singulier $a$ : calculer les dérivées partielles en $a$ **par la définition**, puis soit vérifier directement que $\norm{f(a+h)-f(a)-\sum_i\partial_if(a)h_i}=o(\norm h)$, soit vérifier la continuité des dérivées partielles en $a$. Ne pas conclure de l'existence des seules dérivées partielles en $a$.

## CARD id=fc-ch05-068 ref=ch05-accroissements-finis tags=methode
### Q
Pour majorer $\norm{f(b)-f(a)}$ (ou obtenir un caractère lipschitzien) à partir de $df$, que faire ? Quelle variante pour $\norm{f(b)-f(a)-df_c(b-a)}$ ?
### R
Vérifier que le segment $[a,b]\subset U$ (ou que $U$ est convexe), puis appliquer le TAF : $\norm{f(b)-f(a)}\le\sup_{[a,b]}\norm{df}\,\norm{b-a}$. Pour comparer à l'approximation linéaire en $c$ : appliquer le TAF à $x\mapsto f(x)-df_c(x)$, dont la différentielle est $df_x-df_c$ : $\norm{f(b)-f(a)-df_c(b-a)}\le\sup_{u\in[a,b]}\norm{df_u-df_c}\,\norm{b-a}$ (Exercice V.6.3, p. 112).

## CARD id=fc-ch05-069 ref=ch05-composition-differentielles tags=methode
### Q
Quelle est la technique de réduction à une variable réelle utilisée dans tout le chapitre ?
### R
Poser $g(t)=f(a+th)$ (ou $g(t)=f((1-t)a+tb)$) : par composition, $g'(t)=df_{a+th}(h)$, et plus généralement $g^{(k)}(t)=d^kf_{a+th}(h,\dots,h)$ (Remarque V.5.6). On applique alors un résultat à une variable : TAF (V.4.1, V.4.4), théorème fondamental V.4.7, Taylor (V.5.9-V.5.12). Les hypothèses doivent garantir que le segment $\{a+th\}$ reste dans $U$.
