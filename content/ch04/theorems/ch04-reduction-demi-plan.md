---
id: ch04-reduction-demi-plan
type: proposition
chapter: 4
title: "Méthode : ramener un problème harmonique sur $\Omega$ simplement connexe au demi-plan $H$ par une application conforme"
ref: "non numéroté, section IV.4, p. 82 (réduction au demi-plan par Riemann)"
page: 82
importance: 2
depends: [ch03-riemann-representation-conforme, ch03-riemann-demi-plan, ch04-composition-harmonique-holomorphe, ch01-cayley-disque-demi-plan, ch01-bijection-holomorphe-reciproque-holomorphe, ch01-c-derivable-ssi-df-c-lineaire, ch05-composition-differentielles, ch04-holomorphe-conserve-angles]
tags: [harmonique, conforme, riemann, demi-plan, dirichlet, neumann, methode]
---
## Intuition

> 💡 Un problème de physique stationnaire (température, potentiel des vitesses, potentiel électrique) se formule ainsi : « trouver $\Phi$ harmonique sur un domaine $\Omega$ avec des conditions au bord ». Sur un domaine compliqué c'est difficile ; sur le demi-plan $H=\{\Im(z)>0\}$ c'est souvent facile. L'idée : on **déforme** $\Omega$ en $H$ par une application biholomorphe $h$ (image mentale : un film de savon tendu sur $\Omega$, que l'on étire sans le déchirer jusqu'au demi-plan), on résout sur $H$, puis on **tire en arrière** la solution par $h$. Le miracle est que l'harmonicité survit à cette déformation, ce qui est faux pour une déformation quelconque : seules les applications holomorphes (ou anti-holomorphes, i.e. conjuguées d'holomorphes) conservent le laplacien à un facteur $|h'|^2$ près.

Rappels. Une fonction est **harmonique** sur un ouvert si elle est de classe $C^2$ et de laplacien nul ([[ch04-harmonique-def]]). Un ouvert est **simplement connexe** si tout lacet y est homotope à un lacet constant ([[ch02-homotopie-simplement-connexe]]). Une application **biholomorphe** (ou **conforme**) de $\Omega$ sur $\Omega'$ est une bijection holomorphe dont la réciproque est holomorphe ; en fait la réciproque d'une bijection holomorphe est automatiquement holomorphe ([[ch01-bijection-holomorphe-reciproque-holomorphe]]). Le théorème de Riemann ([[ch03-riemann-representation-conforme]]) fournit une telle $h$ de $\Omega$ sur le disque unité $D$ dès que $\Omega$ est connexe, simplement connexe et distinct de $\C$ ; la transformation de Cayley ([[ch01-cayley-disque-demi-plan]], [[ch03-riemann-demi-plan]]) permet de remplacer $D$ par $H$.

Le point délicat n'est pas l'harmonicité mais les **conditions au bord** : une condition de Dirichlet (valeur imposée au bord) se transporte sans effort ; une condition de Neumann (dérivée normale nulle, « paroi étanche ») se transporte parce que $h$ conserve les angles ([[ch04-holomorphe-conserve-angles]]) : la normale au bord de $\Omega$ est envoyée sur la normale au bord de $H$.

## Énoncé

**Méthode (poly, section IV.4, p. 82).** Si l'on souhaite déterminer des fonctions harmoniques sur un domaine donné, le théorème de représentation conforme de Riemann (Théorème III.4.1) ramène l'étude au cas du demi-plan de Poincaré $H$ (en vertu de la Remarque III.4.2 pour passer du disque unité au demi-plan). Précisément, si l'on cherche une fonction $\Phi$ harmonique sur un ouvert simplement connexe $\Omega$ et qui vérifie certaines conditions au bord de $\Omega$, il « suffit » de trouver une application biholomorphe $h$ de $\Omega$ sur $\C$ ou sur $H$ pour se ramener à la recherche d'une fonction harmonique $\Phi_0$ sur $H$ ou $\C$ : on pose alors $\Phi=\Phi_0\circ h$.

*Forme précise (ce que le poly utilise dans les exemples).* Soit $\Omega$ un ouvert connexe et simplement connexe de $\C$.

1. **Existence de $h$.** Si $\Omega\neq\C$, il existe une application biholomorphe $h:\Omega\to H$. (Si $\Omega=\C$, on prend $h=\mathrm{id}_\C$ et $\C$ joue le rôle de $H$.)
2. **Transport de l'harmonicité.** Pour toute fonction $\Phi_0$ harmonique sur $H$, la fonction $\Phi:=\Phi_0\circ h$ est harmonique sur $\Omega$ ; réciproquement toute fonction harmonique $\Phi$ sur $\Omega$ s'écrit $\Phi=\Phi_0\circ h$ avec $\Phi_0:=\Phi\circ h^{-1}$ harmonique sur $H$. Autrement dit $\Phi_0\mapsto\Phi_0\circ h$ est une bijection de l'ensemble des fonctions harmoniques sur $H$ sur l'ensemble des fonctions harmoniques sur $\Omega$.
3. **Transport des conditions au bord.** Soit $z_0\in\partial\Omega$ tel que $h$ se prolonge continûment en $z_0$ avec $h(z_0)\in\partial H=\R$.
   * (Dirichlet) Si $\Phi_0$ se prolonge continûment en $h(z_0)$, alors $\Phi$ se prolonge continûment en $z_0$ et $\Phi(z_0)=\Phi_0(h(z_0))$.
   * (Neumann) Supposons de plus $\Phi_0$ à valeurs réelles, $h$ holomorphe sur un voisinage $V$ de $z_0$ avec $h'(z_0)\neq0$ et $h(V\cap\partial\Omega)\subset\R$, $\partial\Omega\cap V$ étant un arc de classe $C^1$ régulier, et $\Phi_0$ de classe $C^1$ jusqu'au bord près de $h(z_0)$. Alors, pour un choix cohérent des normales unitaires $n$ à $\partial\Omega$ en $z_0$ et $\pm i$ à $\partial H$ en $h(z_0)$,
   $$
   \frac{\partial\Phi}{\partial n}(z_0)=|h'(z_0)|\,\frac{\partial\Phi_0}{\partial y}\big(h(z_0)\big).
   $$
   En particulier, si la dérivée normale de $\Phi_0$ est nulle sur $\partial H$, celle de $\Phi=\Phi_0\circ h$ est nulle sur $\partial\Omega$ (en tout point où $h$ est conforme jusqu'au bord).

## Hypothèses

### H1 — $\Omega$ connexe, simplement connexe et $\Omega\neq\C$

**Rôle.** Ce sont exactement les hypothèses du théorème de Riemann ([[ch03-riemann-representation-conforme]]) : elles garantissent l'**existence** de $h$. Elles ne servent à rien d'autre : le point 2 vaut pour tout ouvert $\Omega$ et toute $h$ holomorphe de $\Omega$ dans $H$.

**Si on la retire.** Sur la couronne $A=\{1<|z|<2\}$ (connexe, non simplement connexe) il n'existe **aucune** application biholomorphe $h:A\to H$. En effet, une telle $h$ serait un homéomorphisme ; le lacet $\gamma(t)=\tfrac32e^{it}$, $t\in[0,2\pi]$, aurait pour image $h\circ\gamma$ un lacet de $H$, homotope à un lacet constant dans $H$ (qui est convexe, donc étoilé, donc simplement connexe, [[ch02-etoile-simplement-connexe]]) ; en composant cette homotopie par $h^{-1}$ on obtiendrait une homotopie de lacets dans $A$ entre $\gamma$ et un lacet constant. Or alors, par invariance par homotopie ([[ch02-invariance-homotopie-integrale]]) appliquée à $z\mapsto1/z$ holomorphe sur $A$, on aurait $\int_\gamma\frac{dz}{z}=0$, alors que $\int_\gamma\frac{dz}{z}=2i\pi\,\Ind_\gamma(0)=2i\pi$ ([[ch02-indice-def]]). Contradiction. Pour la couronne on procède autrement : voir [[ch04-chaleur-couronne]] (homographie qui **centre** la couronne, sans l'envoyer sur $H$). Pour $\Omega=\C$ : une fonction holomorphe $\C\to H$ composée avec la transformation de Cayley $H\to D$ est entière et bornée, donc constante (Liouville, [[ch01-liouville]]) ; on prend simplement $h=\mathrm{id}$ et l'on travaille sur $\C$.

### H2 — $h$ biholomorphe (et pas seulement holomorphe)

**Rôle.** L'holomorphie de $h$ suffit pour que $\Phi_0\circ h$ soit harmonique. La bijectivité et l'holomorphie de $h^{-1}$ servent à la **réciproque** du point 2 : toute fonction harmonique sur $\Omega$ provient d'une fonction harmonique sur $H$, de sorte que l'on ne perd aucune solution en travaillant sur $H$.

**Si on la retire.** Avec $h$ holomorphe non bijective, $\Phi_0\circ h$ reste harmonique mais on ne récupère plus toutes les fonctions harmoniques de $\Omega$ : pour $h\equiv i$ (constante), toutes les $\Phi_0\circ h$ sont constantes. Exemple moins trivial, dans le cas « $\C$ » de l'énoncé : $\Omega=\C^\times$ et $h(z)=z^2$, holomorphe de $\Omega$ dans $\C$ mais non injective. La fonction harmonique $\Phi(z)=\Re(z)=x$ vérifie $\Phi(1)=1\neq-1=\Phi(-1)$ alors que $h(1)=h(-1)=1$ : $\Phi$ n'est de la forme $\Phi_0\circ h$ pour aucune fonction $\Phi_0$. Une $h$ non injective **perd** des solutions.

### H3 — Régularité de $h$ et de $\Phi_0$ jusqu'au bord

**Rôle.** Elle n'intervient que dans le point 3. La condition de Dirichlet se transporte dès que $h$ et $\Phi_0$ se prolongent continûment ; la condition de Neumann demande que $h$ soit conforme ($h'(z_0)\neq0$) **au point du bord** considéré, pour que la normale à $\partial\Omega$ soit envoyée sur la normale à $\partial H$ ([[ch04-holomorphe-conserve-angles]]). Le théorème de Riemann ne dit rien du comportement de $h$ au bord : dans les exemples du poly, $h$ est explicite ($z^{1/(2\alpha)}$, $\exp$, Joukovski, homographies) et la vérification est directe.

**Si on la retire.** Hypothèse de confort au sens où, sans elle, l'énoncé n'a plus de sens : si $h'(z_0)=0$ ou si $h$ n'est pas $C^1$ en $z_0$, les angles ne sont plus conservés ([[ch04-holomorphe-conserve-angles]], piège : angles multipliés par l'ordre du zéro) et la « normale image » n'est plus la normale de $\partial H$. Ce qui change concrètement : le gradient $\nabla\Phi(z)=\overline{h'(z)}\,\nabla\Phi_0(h(z))$ (voir la preuve) peut **exploser** en un point du bord où $|h'|\to+\infty$. C'est le phénomène de l'Exercice IV.4.1, question 5 (poly, p. 85) : pour l'écoulement autour de la plaque $[-1,1]$ obtenu par la réciproque de Joukovski ([[ch04-joukovski]]), la vitesse diverge aux extrémités $\pm1$ dès que l'angle d'incidence est non nul.

### H4 — $\Phi_0$ harmonique sur $H$

**Rôle.** C'est ce que l'on transporte. La formule $\Delta(\Phi_0\circ h)=\big((\Delta\Phi_0)\circ h\big)\,|h'|^2$ ([[ch04-composition-harmonique-holomorphe]]) montre que c'est aussi nécessaire : si $\Delta\Phi_0(w_0)\neq0$, alors $\Delta(\Phi_0\circ h)(z)\neq0$ au point $z=h^{-1}(w_0)$ puisque $h'(z)\neq0$ ($h$ biholomorphe).

**Si on la retire.** $\Phi_0(w)=|w|^2$ n'est pas harmonique ($\Delta|w|^2=4$) et $\Phi_0\circ h=|h|^2$ ne l'est pas non plus : $\Delta|h|^2=4|h'|^2>0$.

## Idée de la preuve

Riemann + Cayley donnent $h$. La composée « harmonique $\circ$ holomorphe » est harmonique, dans les deux sens grâce à $h^{-1}$ holomorphe. Pour Neumann : la règle de la chaîne donne $\nabla(\Phi_0\circ h)(z)=\overline{h'(z)}\,\nabla\Phi_0(h(z))$, et la multiplication par $h'(z_0)$ envoie la normale à $\partial\Omega$ sur une normale à $\R$.

## Preuve

**Étape 1 : existence de $h$.** Si $\Omega\neq\C$, le théorème de Riemann ([[ch03-riemann-representation-conforme]]) fournit une application biholomorphe $g:\Omega\to D$. La transformation de Cayley $c(z)=i\dfrac{1-z}{1+z}$ est une application biholomorphe de $D$ sur $H$ ([[ch01-cayley-disque-demi-plan]] ; c'est le contenu de la Remarque III.4.2, [[ch03-riemann-demi-plan]]). La composée $h:=c\circ g$ est holomorphe, bijective de $\Omega$ sur $H$, de réciproque $g^{-1}\circ c^{-1}$ holomorphe : $h$ est biholomorphe. Si $\Omega=\C$, $h=\mathrm{id}$.

**Étape 2 : transport de l'harmonicité.** Soit $\Phi_0$ harmonique sur $H$. L'application $h:\Omega\to H$ est holomorphe et $\Phi_0$ est définie sur $h(\Omega)\subset H$, donc $\Phi_0\circ h$ est harmonique sur $\Omega$ par le résultat de composition ([[ch04-composition-harmonique-holomorphe]]), qui donne plus précisément
$$
\Delta(\Phi_0\circ h)(z)=(\Delta\Phi_0)(h(z))\,|h'(z)|^2=0 .
$$
Réciproquement, si $\Phi$ est harmonique sur $\Omega$, la réciproque $h^{-1}:H\to\Omega$ est holomorphe ([[ch01-bijection-holomorphe-reciproque-holomorphe]]), donc $\Phi_0:=\Phi\circ h^{-1}$ est harmonique sur $H$ par le même résultat, et $\Phi_0\circ h=\Phi$. Les deux applications $\Phi_0\mapsto\Phi_0\circ h$ et $\Phi\mapsto\Phi\circ h^{-1}$ sont réciproques l'une de l'autre : bijection.

**Étape 3 : conditions au bord.**

*(Dirichlet.)* Si $h(z)\to h(z_0)$ quand $z\to z_0$, $z\in\Omega$, et si $\Phi_0(w)\to\ell$ quand $w\to h(z_0)$, $w\in H$, alors $\Phi(z)=\Phi_0(h(z))\to\ell$ (composition de limites). Rien d'autre à dire.

*(Neumann.)* On identifie $\R^2$ et $\C$ ; le produit scalaire s'écrit $\langle u,v\rangle=\Re(\bar u\,v)$ et le gradient d'une fonction réelle $\Psi$ de classe $C^1$ est le vecteur $\nabla\Psi=\partial_x\Psi+i\,\partial_y\Psi$, caractérisé par $d\Psi_z(v)=\langle\nabla\Psi(z),v\rangle$ pour tout $v\in\C$.

*Formule du gradient composé.* Soit $z\in\Omega$ (ou $z\in V$, là où $h$ est holomorphe et $\Phi_0$ est $C^1$). Par la règle de la chaîne ([[ch05-composition-differentielles]]), $d\Phi_z=d(\Phi_0)_{h(z)}\circ dh_z$. Comme $h$ est $\C$-dérivable en $z$, sa différentielle est la multiplication par $h'(z)$ : $dh_z(v)=h'(z)\,v$ ([[ch01-c-derivable-ssi-df-c-lineaire]]). Donc, pour tout $v\in\C$,
$$
d\Phi_z(v)=\Re\Big(\overline{\nabla\Phi_0(h(z))}\;h'(z)\,v\Big)=\Re\Big(\overline{\overline{h'(z)}\,\nabla\Phi_0(h(z))}\;v\Big)=\Big\langle\overline{h'(z)}\,\nabla\Phi_0(h(z)),\,v\Big\rangle ,
$$
ce qui prouve
$$
\nabla(\Phi_0\circ h)(z)=\overline{h'(z)}\;\nabla\Phi_0\big(h(z)\big). \tag{$*$}
$$
(Le conjugué vient de ce que la transposée de la matrice de la multiplication par $a+ib$, $\begin{pmatrix}a&-b\\ b&a\end{pmatrix}$, est la matrice de la multiplication par $a-ib$.)

*Image de la normale.* Soit $\gamma$ un paramétrage $C^1$ régulier de $\partial\Omega$ près de $z_0$, $\gamma(0)=z_0$, et $n:=i\,\gamma'(0)/|\gamma'(0)|$ une normale unitaire en $z_0$. Par hypothèse $h\circ\gamma$ est à valeurs dans $\R$, et $(h\circ\gamma)'(0)=h'(z_0)\gamma'(0)$ ([[ch04-holomorphe-conserve-angles]], étape 1 de la preuve) est donc un **réel** non nul. Par suite
$$
h'(z_0)\,n=i\,\frac{h'(z_0)\gamma'(0)}{|\gamma'(0)|}=\pm i\,|h'(z_0)| ,
$$
le signe étant celui du réel $h'(z_0)\gamma'(0)$ : c'est un vecteur normal à $\partial H=\R$, de longueur $|h'(z_0)|$.

*Conclusion.* Par $(*)$ puis par le calcul $\langle\bar a\,u,v\rangle=\Re(a\,\bar u\,v)=\langle u,a\,v\rangle$ valable pour $a\in\C$,
$$
\frac{\partial\Phi}{\partial n}(z_0)=\big\langle\overline{h'(z_0)}\,\nabla\Phi_0(h(z_0)),\,n\big\rangle=\big\langle\nabla\Phi_0(h(z_0)),\,h'(z_0)\,n\big\rangle=\pm|h'(z_0)|\,\big\langle\nabla\Phi_0(h(z_0)),\,i\big\rangle=\pm|h'(z_0)|\,\frac{\partial\Phi_0}{\partial y}\big(h(z_0)\big).
$$
Si $\partial_y\Phi_0=0$ sur $\partial H$ (dérivée normale nulle), alors $\partial_n\Phi(z_0)=0$. $\square$

*Remarque.* L'étape 3 n'utilise de $h$ que l'holomorphie près de $z_0$ et $h'(z_0)\neq0$ ; elle s'applique donc aussi aux applications conformes « jusqu'au bord » qui ne proviennent pas de Riemann, comme $z\mapsto z^{1/(2\alpha)}$ sur le coin ([[ch04-ecoulement-coin]]) ou la transformation de Joukovski sur $|z|>1$ ([[ch04-joukovski]]).

## Preuve à trous

**Existence de $h$.** Riemann donne $g:\Omega\to D$ biholomorphe, et <trou indice="quelle application explicite envoie $D$ sur $H$ ?">la transformation de Cayley $c(z)=i\frac{1-z}{1+z}$ est biholomorphe de $D$ sur $H$ ; on pose $h=c\circ g$</trou>.

**Harmonicité.** $\Phi_0\circ h$ est harmonique car <trou indice="formule du laplacien d'une composée">$\Delta(\Phi_0\circ h)=\big((\Delta\Phi_0)\circ h\big)\,|h'|^2=0$</trou>. Réciproquement, pour $\Phi$ harmonique sur $\Omega$, $\Phi\circ h^{-1}$ est harmonique sur $H$ parce que <trou indice="que sait-on de la réciproque d'une bijection holomorphe ?">$h^{-1}$ est holomorphe</trou>.

**Neumann.** Par la règle de la chaîne et $dh_z(v)=h'(z)v$, on obtient la formule du gradient <trou indice="attention au conjugué : la transposée de la multiplication par $a+ib$ est la multiplication par $a-ib$">$\nabla(\Phi_0\circ h)(z)=\overline{h'(z)}\,\nabla\Phi_0(h(z))$</trou>. Si $n$ est une normale unitaire à $\partial\Omega$ en $z_0$, alors $h'(z_0)n$ est <trou indice="conformité : $h$ envoie la tangente à $\partial\Omega$ sur la tangente à $\R$">un vecteur normal à $\R$ de longueur $|h'(z_0)|$, soit $\pm i|h'(z_0)|$</trou>, d'où $\partial_n\Phi(z_0)=\langle\nabla\Phi_0(h(z_0)),h'(z_0)n\rangle=\pm|h'(z_0)|\,\partial_y\Phi_0(h(z_0))$. $\square$

## Exemples

* **Quart de plan.** $\Omega=\{x>0,\ y>0\}$ et $h(z)=z^2$ : en polaires, $re^{i\theta}\mapsto r^2e^{2i\theta}$ envoie bijectivement $\theta\in\,]0,\pi/2[$ sur $]0,\pi[$, et $h$ est biholomorphe de $\Omega$ sur $H$ (réciproque : la racine carrée $\sqrt r\,e^{i\theta/2}$). Avec l'écoulement uniforme $\Phi_0(w)=\lambda\Re(w)$ sur $H$ ([[ch04-ecoulement-potentiel]]), on obtient $\Phi(z)=\lambda\Re(z^2)=\lambda(x^2-y^2)$ et $\nabla\Phi=2\lambda(x,-y)$. Vérifications : $\Delta\Phi=2\lambda-2\lambda=0$ ; sur la paroi $\{y=0\}$, $\partial_y\Phi=-2\lambda y=0$ ; sur la paroi $\{x=0\}$, $\partial_x\Phi=2\lambda x=0$. La formule $(*)$ redonne bien $\nabla\Phi=\overline{2z}\cdot\lambda=2\lambda(x-iy)$. Le coin $0$ est un point d'arrêt ($|\nabla\Phi|=2\lambda|z|\to0$) : c'est le cas $\alpha=1/4$ de [[ch04-ecoulement-coin]].
* **Bande et problème de Dirichlet.** $\Omega=\{0<\Im(z)<\pi\}$ et $h=\exp$ : $e^{x+iy}=e^xe^{iy}$ décrit bijectivement $H$ quand $x\in\R$ et $y\in\,]0,\pi[$, donc $\exp$ est biholomorphe de $\Omega$ sur $H$ (réciproque : la détermination principale $\mathrm{Log}$, [[ch02-logarithme-determination-principale-def]]). Sur $H$, la fonction $\Phi_0(w)=T_1+(T_0-T_1)\dfrac{\operatorname{Arg}(w)}{\pi}=T_1+\dfrac{T_0-T_1}{\pi}\Im(\mathrm{Log}\,w)$ est harmonique (partie imaginaire d'une fonction holomorphe, [[ch04-holomorphe-implique-harmonique]]), vaut $T_1$ sur $]0,+\infty[$ et $T_0$ sur $]-\infty,0[$ (Exercice IV.4.3, poly p. 86). Alors $\Phi=\Phi_0\circ\exp$ vaut $T_1+\dfrac{T_0-T_1}{\pi}\,y$ car $\operatorname{Arg}(e^{x+iy})=y$ pour $y\in\,]0,\pi[$ : température **affine** en $y$ dans la bande, égale à $T_1$ sur le bord $y=0$ et $T_0$ sur le bord $y=\pi$, ce que l'on vérifie directement.
* **Ce que la méthode ne fait pas.** La couronne $\{R^-<|z|<R^+\}$ n'est pas simplement connexe (H1) ; la température stationnaire y est $\alpha\log|z|+\beta$, qui n'est **pas** la partie réelle d'une fonction holomorphe sur la couronne ([[ch04-harmoniques-radiales]]). Pour une couronne excentrée on utilise une homographie qui la rend concentrique : [[ch04-chaleur-couronne]].

## Pièges

* > ⚠️ Riemann donne l'**existence** de $h$, jamais une formule. En pratique, on connaît $h$ explicitement : puissances $z^{\beta}$ (coins), $\exp$ (bandes), homographies (disques, demi-plans), Joukovski (obstacle circulaire). Savoir ces exemples par cœur.
* Sens de la composition : $h$ va du **domaine physique** $\Omega$ vers le **domaine modèle** $H$, et $\Phi=\Phi_0\circ h$ (on tire la solution modèle en arrière). Écrire $\Phi_0\circ h^{-1}$ est une erreur de sens (voir la coquille du poly discutée dans [[ch04-joukovski]]).
* La simple connexité est indispensable pour Riemann (couronne : H1) ; mais l'harmonicité de $\Phi_0\circ h$ ne demande rien sur $\Omega$.
* La condition de Neumann ne se transporte qu'aux points où $h$ est **conforme jusqu'au bord** ($h'\neq0$) ; en un coin ou en un point de repliement, la vitesse peut diverger (H3).
* Sur $H$ (non borné), une fonction harmonique n'est **pas** déterminée par ses valeurs au bord : $\Phi_0(w)=\Im(w)=y$ est harmonique, nulle sur $\R$ et non nulle. L'unicité demande une hypothèse de bornitude (remarque du poly p. 82, [[ch04-ecoulement-potentiel]]) ; sur un $\Omega$ **borné**, elle est rétablie par le principe du maximum ([[ch04-maximum-unicite-bord]]).
