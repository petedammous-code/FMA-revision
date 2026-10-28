---
id: ch04-chaleur-couronne
type: proposition
chapter: 4
title: "Température stationnaire dans une gaine en couronne (centrée puis excentrée par homographie)"
ref: "non numéroté, section IV.4.2, p. 85 (chaleur dans une couronne)"
page: 85
importance: 2
depends: [ch04-harmonique-moyenne-maximum, ch04-maximum-unicite-bord, ch04-composition-harmonique-holomorphe, ch04-harmoniques-radiales, ch04-harmonique-def, ch01-bijection-holomorphe-reciproque-holomorphe]
tags: [chaleur, couronne, dirichlet, homographie, module-conforme, principe-du-maximum, logarithme]
---
## Intuition

> 💡 Un tuyau (la « gaine ») a une section en forme de couronne : un petit disque évidé dans un grand. La paroi intérieure est maintenue à la température $T^-$, la paroi extérieure à $T^+$. Quand tout est stabilisé, la température $T$ dans la paroi ne dépend plus du temps et l'équation de la chaleur se réduit à $\Delta T=0$ : $T$ est harmonique. Si les deux cercles sont concentriques, la symétrie suggère une solution radiale, donc de la forme $\alpha\log|z|+\beta$ ([[ch04-harmoniques-radiales]]), et les deux constantes s'ajustent aux deux températures. Si les cercles ne sont pas concentriques (tuyau à paroi d'épaisseur variable), il n'y a plus de symétrie... mais une **homographie** bien choisie rend les deux cercles concentriques sans abîmer l'harmonicité, et l'on se ramène au cas précédent. Les isothermes sont alors des cercles non concentriques, resserrés là où la paroi est mince.

Deux idées structurantes : (1) le **principe du maximum** garantit l'**unicité** ([[ch04-maximum-unicite-bord]]) : dès qu'on a trouvé une solution, c'est la bonne, et il n'y a pas à justifier a priori qu'elle est radiale ; (2) deux couronnes ne sont pas toujours conformément équivalentes : le rapport des rayons $\rho^+/\rho^-$ de la couronne centrée image (son **module conforme**) est imposé par la géométrie, et il diffère en général de $R^+/R^-$.

Rappels. Une fonction est **harmonique** si elle est $C^2$ de laplacien nul ([[ch04-harmonique-def]]). Une **homographie** est une application $f(z)=\dfrac{az+b}{cz+d}$ avec $ad-bc\neq0$ ; si $c\neq0$, c'est une bijection holomorphe de $\C\setminus\{-d/c\}$ sur $\C\setminus\{a/c\}$, de réciproque $w\mapsto\dfrac{dw-b}{-cw+a}$ également une homographie (résoudre $w(cz+d)=az+b$) ; c'est donc une application biholomorphe entre ces deux ouverts. Si $c=0$, c'est une application affine $z\mapsto(az+b)/d$, bijection de $\C$.

## Énoncé

**Proposition (poly, section IV.4.2, p. 85–86).** Une gaine rectiligne infinie a une section en couronne (non simplement connexe !) de rayons $R^-<R^+$ et baigne dans des calorimètres à l'intérieur comme à l'extérieur, à températures $T^-$ et $T^+$. Les deux cercles définissant le bord de la section ne sont pas nécessairement centrés au même point. L'équation de la chaleur qui régit la distribution de température s'écrit
$$
\frac{\partial T}{\partial t}-\Delta T=0 .
$$

1. **Régime permanent.** Si $\partial_tT=0$, la distribution de température $T$ est une fonction harmonique sur la couronne, qui vaut $T^+$ et $T^-$ sur les cercles de bord de rayons $R^+$ et $R^-$.
2. **Unicité.** La différence de deux solutions est une fonction harmonique nulle au bord du domaine, donc nulle à l'intérieur (conséquence du principe du maximum) : si le problème possède une solution, celle-ci est unique.
3. **Cas centré.** Les fonctions harmoniques invariantes par rotation étant de la forme $z\mapsto\alpha\log|z|+\beta$ (Exercice IV.4.2), si les deux cercles de bord sont centrés à l'origine, la distribution de température en régime permanent est
$$
T_{\text{centrée}}(z)=\frac{T^+-T^-}{\ln R^+-\ln R^-}\,\ln|z|+\frac{T^-\ln R^+-T^+\ln R^-}{\ln R^+-\ln R^-}\qquad(R^-\le|z|\le R^+).
$$
4. **Cas général.** Quand les deux cercles de bord n'ont pas le même centre, on peut toujours trouver une transformation homographique
$$
f(z)=\frac{az+b}{cz+d}
$$
qui transforme la couronne excentrée en une couronne centrée de rayons $\rho^-<\rho^+$. La distribution de température en régime permanent est alors $T_{\text{centrée}}\circ f$, où $T_{\text{centrée}}$ est calculée avec les rayons $\rho^\pm$ de la couronne image, et **non** avec $R^\pm$ : le rapport $\rho^+/\rho^-$, qui est le **module conforme** de la couronne, diffère en général de $R^+/R^-$.

*Précisions.* « Couronne excentrée » signifie : $\Omega$ est l'ouvert compris entre deux cercles $C^-=C(a^-,R^-)$ et $C^+=C(a^+,R^+)$ avec $\bar D(a^-,R^-)\subset D(a^+,R^+)$, i.e. $|a^--a^+|+R^-<R^+$ ; la solution cherchée est continue sur $\bar\Omega$, harmonique sur $\Omega$. Dans le point 4, l'homographie convient dès qu'elle est holomorphe et injective sur un voisinage de $\bar\Omega$ et envoie $C^\pm$ sur $C(0,\rho^\pm)$ ; la preuve en construit une explicitement (le poly se contente de « on remarque que l'on peut toujours trouver »).

## Hypothèses

### H1 — Régime permanent ($\partial_tT=0$)

**Rôle.** C'est ce qui réduit l'équation de la chaleur (une EDP d'évolution) à l'équation de Laplace $\Delta T=0$ et fait entrer les fonctions harmoniques.

**Si on la retire.** $T$ dépend du temps et n'est plus harmonique en espace : les solutions à variables séparées $T(t,z)=e^{-\mu t}\psi(z)$ de $\partial_tT=\Delta T$ vérifient $\Delta\psi=-\mu\psi$ avec $\mu>0$, pas $\Delta\psi=0$. Sans entrer dans les détails (hors programme), la solution transitoire **converge** vers la solution stationnaire quand $t\to+\infty$, ce qui est tout l'intérêt de celle-ci.

### H2 — Conditions de Dirichlet constantes sur chaque cercle

**Rôle.** Dans le cas centré, c'est ce qui rend le problème invariant par rotation et permet de chercher $T$ radiale ; dans le cas excentré, c'est ce qui fait que $T_{\text{centrée}}\circ f$ prend les bonnes valeurs au bord : $|f|=\rho^\pm$ sur $C^\pm$, donc $T_{\text{centrée}}\circ f=T^\pm$ sur $C^\pm$.

**Si on la retire.** Avec une température non constante sur un cercle (par exemple $T=\cos\theta$ sur $|z|=R^+$ et $0$ sur $|z|=R^-$), la solution existe encore et est unique, mais n'est plus radiale : ici $T=\dfrac{r-R^{-2}/r}{R^+-R^{-2}/R^+}\cos\theta$ (combinaison de $r\cos\theta$ et $\cos\theta/r$, harmoniques, cf. [[ch04-harmoniques-radiales]], H2). La méthode « $\alpha\log|z|+\beta$ » échoue.

### H3 — Le domaine est une couronne bornée, bord formé de deux cercles

**Rôle.** Bornitude : le principe du maximum s'applique sur un ouvert connexe **borné** avec $T$ continue sur le compact $\bar\Omega$, ce qui donne l'unicité. Deux cercles : c'est ce qui permet d'utiliser une homographie (qui envoie cercles sur cercles) pour rendre la couronne concentrique.

**Si on la retire.** Sur un domaine non borné, l'unicité tombe : sur $\{|z|>1\}$, $T\equiv0$ et $T(z)=\log|z|$ sont toutes deux harmoniques et nulles sur $|z|=1$. Si le bord intérieur n'est pas un cercle (section carrée dans un disque), aucune homographie ne la centre ; l'unicité reste vraie mais la formule explicite disparaît.

### H4 — Existence d'une homographie qui centre la couronne

**Rôle.** Point 4 ; elle n'est pas automatique, c'est un énoncé géométrique : pour deux cercles disjoints emboîtés, il existe deux points $p,q$ (les **points limites** du faisceau de cercles) tels que chaque cercle soit un cercle d'Apollonius $\{|z-p|/|z-q|=k\}$ ; alors $f(z)=\dfrac{z-p}{z-q}$ convient. La preuve ci-dessous le démontre.

**Si on la retire.** Hypothèse de confort au sens où elle est toujours vraie (c'est un théorème). Ce qui serait faux, c'est de calculer $T_{\text{centrée}}$ avec les rayons $R^\pm$ d'origine : la fonction $T_{\text{centrée}}^{R^\pm}\circ f$ est harmonique sur $\Omega$ mais vaut $T_{\text{centrée}}^{R^\pm}(\rho^\pm)\neq T^\pm$ au bord dès que $\rho^+/\rho^-\neq R^+/R^-$ (voir l'Exemple 2 : elle vaudrait $\tfrac{200\ln2}{\ln(5/2)}\simeq151$ au lieu de $0$ sur le cercle extérieur), et la fonction $T_{\text{centrée}}^{R^\pm}$ elle-même (sans composer) ne prend pas les bonnes valeurs sur les cercles excentrés, voire n'est pas définie sur $\bar\Omega$ si $0\in\bar\Omega$ n'est pas dans $\Omega$.

## Idée de la preuve

Unicité par le principe du maximum appliqué à la différence. Cas centré : chercher $T=\alpha\log|z|+\beta$ et résoudre le système $2\times2$. Cas excentré : normaliser les centres sur l'axe réel, trouver $p<q$ réels inverses par rapport aux deux cercles ($pq=R^{+2}$, $(p-c)(q-c)=R^{-2}$), poser $f(z)=\frac{z-p}{z-q}$ : $|f|$ est constant sur chaque cercle ; composer.

## Preuve

**Point 1.** En régime permanent, l'équation de la chaleur devient $-\Delta T=0$ : $T$ est harmonique sur $\Omega$ (on suppose $T$ de classe $C^2$ sur $\Omega$, continue sur $\bar\Omega$), et les conditions de contact avec les calorimètres imposent $T=T^\pm$ sur $C^\pm$.

**Point 2 : unicité.** Soient $T_1,T_2$ deux solutions et $h=T_1-T_2$ : $h$ est harmonique sur $\Omega$ (le laplacien est linéaire), continue sur le compact $\bar\Omega$, nulle sur $\partial\Omega=C^+\cup C^-$. Comme $\Omega$ est connexe et borné, $h$ est nulle sur $\Omega$ ([[ch04-maximum-unicite-bord]]) ; rappelons l'argument : $h$ atteint son maximum sur le compact $\bar\Omega$ ; s'il est atteint en un point intérieur, le principe du maximum ([[ch04-harmonique-moyenne-maximum]]) force $h$ constante sur le connexe $\Omega$, donc, par continuité, égale à sa valeur au bord $0$ ; sinon le maximum est atteint sur le bord et vaut $0$ ; dans les deux cas $h\le0$. Le même raisonnement pour $-h$ donne $h\ge0$. Donc $h\equiv0$ et $T_1=T_2$.

**Point 3 : cas centré.** Cherchons une solution radiale : d'après [[ch04-harmoniques-radiales]], les fonctions harmoniques radiales sur la couronne (ouvert invariant par rotation ne contenant pas $0$) sont les $\alpha\ln|z|+\beta$. Les conditions au bord s'écrivent
$$
\alpha\ln R^-+\beta=T^-,\qquad \alpha\ln R^++\beta=T^+ .
$$
Par soustraction, $\alpha(\ln R^+-\ln R^-)=T^+-T^-$, et $\ln R^+-\ln R^-=\ln(R^+/R^-)>0$ car $R^+>R^-$, d'où $\alpha=\dfrac{T^+-T^-}{\ln R^+-\ln R^-}$. Puis
$$
\beta=T^--\alpha\ln R^-=\frac{T^-(\ln R^+-\ln R^-)-(T^+-T^-)\ln R^-}{\ln R^+-\ln R^-}=\frac{T^-\ln R^+-T^+\ln R^-}{\ln R^+-\ln R^-}.
$$
La fonction $T_{\text{centrée}}$ ainsi définie est harmonique sur $\Omega$, continue sur $\bar\Omega$ (elle est $C^\infty$ sur $\C^\times\supset\bar\Omega$) et prend les valeurs voulues au bord : c'est **une** solution, donc **la** solution par le point 2. Remarque : on n'a pas eu à démontrer a priori que la solution était radiale ; l'unicité s'en charge.

**Point 4 : cas excentré.**

*(a) Normalisation.* Soient $C^+=C(a^+,R^+)$ et $C^-=C(a^-,R^-)$ avec $|a^--a^+|+R^-<R^+$. Écrivons $a^--a^+=ce^{i\theta_0}$ avec $c\ge0$. L'application affine $\sigma(z)=e^{-i\theta_0}(z-a^+)$ (une homographie, bijection de $\C$ conservant les distances) envoie $C^+$ sur $C(0,R^+)$ et $C^-$ sur $C(c,R^-)$, avec $0\le c$ et $c+R^-<R^+$. Si $c=0$ la couronne est déjà centrée ($f=\sigma$). Supposons $c>0$.

*(b) Un lemme : cercle d'Apollonius.* Soient $a\in\R$, $R>0$ et $p,q$ réels distincts tels que $(p-a)(q-a)=R^2$ (on dit que $p,q$ sont **inverses** par rapport au cercle $C(a,R)$). Alors, pour tout $z\in C(a,R)$,
$$
\frac{|z-p|^2}{|z-q|^2}=\frac{p-a}{q-a}.
$$
Preuve : quitte à translater, $a=0$ et $pq=R^2$. Pour $|z|^2=R^2=pq$, $|z-p|^2=|z|^2-2p\Re(z)+p^2=pq-2p\Re(z)+p^2=p\,(q-2\Re(z)+p)$ et de même $|z-q|^2=q\,(p-2\Re(z)+q)$ ; le quotient vaut $p/q$ (les parenthèses sont égales et non nulles car $|z-q|\neq0$ : $q\notin C(0,R)$ puisque $q^2=R^2$ forcerait $p=q$). $\square$

*(c) Choix de $p$ et $q$.* On cherche $p,q$ réels, inverses à la fois par rapport à $C(0,R^+)$ et à $C(c,R^-)$ :
$$
pq=R^{+2},\qquad (p-c)(q-c)=R^{-2}.
$$
La seconde s'écrit $pq-c(p+q)+c^2=R^{-2}$, soit, avec la première, $p+q=s:=\dfrac{R^{+2}+c^2-R^{-2}}{c}$. Ainsi $p,q$ sont les racines de $X^2-sX+R^{+2}=0$. Elles sont réelles et distinctes car
$$
s-2R^+=\frac{R^{+2}-2cR^++c^2-R^{-2}}{c}=\frac{(R^+-c)^2-R^{-2}}{c}=\frac{(R^+-c-R^-)(R^+-c+R^-)}{c}>0
$$
(les deux facteurs sont $>0$ car $R^+-c>R^-$), d'où $s>2R^+$ et le discriminant $s^2-4R^{+2}>0$. Les racines sont de plus **positives** (somme $s>0$, produit $R^{+2}>0$) ; notons-les $p<q$. Localisation : $pq=R^{+2}$ avec $p<q$ donne $p<R^+<q$ ; et $(p-c)(q-c)=R^{-2}>0$ avec $q-c>R^+-c>R^-$ donne $p-c>0$ et $p-c=\dfrac{R^{-2}}{q-c}<\dfrac{R^{-2}}{R^-}=R^-$. Conclusion : $c<p<c+R^-$ (le point $p$ est **dans** le disque intérieur $D(c,R^-)$) et $q>R^+$ (le point $q$ est **hors** du disque extérieur). Aucun des deux n'est dans $\bar\Omega_0$, la couronne fermée normalisée.

*(d) L'homographie.* Posons $g(z)=\dfrac{z-p}{z-q}$ ($ad-bc=-q+p\neq0$). Elle est holomorphe sur $\C\setminus\{q\}\supset\bar\Omega_0$ et injective. Par le lemme (b) :
$$
z\in C(0,R^+)\ \Longrightarrow\ |g(z)|=\sqrt{p/q}=:\rho^+,\qquad z\in C(c,R^-)\ \Longrightarrow\ |g(z)|=\sqrt{\frac{p-c}{q-c}}=:\rho^- .
$$
On a $\rho^-<\rho^+$ : $\dfrac{p-c}{q-c}<\dfrac pq\iff q(p-c)<p(q-c)\iff -qc<-pc\iff p<q$, vrai. Et $\rho^+<1$ car $p<q$.

*(e) $g$ envoie $\Omega_0$ sur la couronne $A':=\{\rho^-<|w|<\rho^+\}$.* L'application $g$ est un homéomorphisme de $\C\setminus\{q\}$ sur $\C\setminus\{1\}$ (bijection continue de réciproque continue, voir les rappels). Elle envoie donc les composantes connexes de $\C\setminus\{q\}$ privé de $C(0,R^+)\cup C(c,R^-)$ sur celles de $\C\setminus\{1\}$ privé de $C(0,\rho^+)\cup C(0,\rho^-)$. Les premières sont $D(c,R^-)$, $\Omega_0$ et $E:=\{|z|>R^+\}\setminus\{q\}$ ; les secondes sont $D(0,\rho^-)$, $A'$ et $E':=\{|w|>\rho^+\}\setminus\{1\}$ (le point $1$ est dans $E'$ car $\rho^+<1$). Or $g(p)=0\in D(0,\rho^-)$ avec $p\in D(c,R^-)$, donc $g(D(c,R^-))=D(0,\rho^-)$ ; et $g(z)\to1$ quand $z\to\infty$, de sorte que $g(E)$ contient des points de module $>\rho^+$, donc $g(E)=E'$. Il reste $g(\Omega_0)=A'$. De plus $g(\bar\Omega_0)=\bar{A'}$.

*(f) La température.* Soit $f:=g\circ\sigma$, homographie (composée d'homographies, ce que l'on vérifie en substituant), biholomorphe de $\Omega$ sur $A'$ ([[ch01-bijection-holomorphe-reciproque-holomorphe]] ou formule explicite de la réciproque), continue sur $\bar\Omega$, avec $|f|=\rho^\pm$ sur $C^\pm$. Soit $T_{\text{centrée}}^{\rho}$ la fonction du point 3 calculée avec les rayons $\rho^-<\rho^+$ et les températures $T^\pm$. Alors $T:=T_{\text{centrée}}^{\rho}\circ f$ :
* est harmonique sur $\Omega$, comme composée de la fonction harmonique $T_{\text{centrée}}^{\rho}$ (sur $\C^\times\supset f(\Omega)$) et de la fonction holomorphe $f$ ([[ch04-composition-harmonique-holomorphe]]) ;
* est continue sur $\bar\Omega$ ;
* vaut $T_{\text{centrée}}^{\rho}(w)$ avec $|w|=\rho^\pm$ sur $C^\pm$, c'est-à-dire $T^\pm$.

C'est une solution, donc la solution (point 2). Explicitement,
$$
T(z)=\frac{T^+-T^-}{\ln\rho^+-\ln\rho^-}\,\ln|f(z)|+\frac{T^-\ln\rho^+-T^+\ln\rho^-}{\ln\rho^+-\ln\rho^-},
$$
et les isothermes $\{T=\text{const}\}=\{|f|=\text{const}\}$ sont les cercles d'Apollonius $\{|z-p'|/|z-q'|=k\}$ (avec $p'=\sigma^{-1}(p)$, $q'=\sigma^{-1}(q)$) : des cercles **non concentriques**.

*(g) Module conforme.* Le rapport $\rho^+/\rho^-=\sqrt{\dfrac{p\,(q-c)}{q\,(p-c)}}$ dépend de $c$ et n'est pas $R^+/R^-$ en général (Exemple 1). Le poly l'appelle **module conforme** de la couronne : on admet (hors programme) que deux couronnes $\{r^-<|w|<r^+\}$ et $\{\rho^-<|w|<\rho^+\}$ sont conformément équivalentes si et seulement si $r^+/r^-=\rho^+/\rho^-$ ; le sens facile est que l'homothétie $w\mapsto(\rho^+/r^+)w$ envoie l'une sur l'autre quand les rapports sont égaux. C'est ce qui explique que l'on ne puisse pas **choisir** $\rho^\pm=R^\pm$. $\square$

## Preuve à trous

**Unicité.** Si $T_1,T_2$ sont deux solutions, $h=T_1-T_2$ est harmonique, continue sur $\bar\Omega$ compact, nulle au bord ; <trou indice="principe du maximum, appliqué à $h$ et à $-h$">si $h$ atteignait son maximum (resp. minimum) à l'intérieur, elle serait constante donc nulle ; sinon $\max h=\max_{\partial\Omega}h=0$ et de même $\min h=0$</trou>. Donc $h\equiv0$.

**Cas centré.** On cherche $T=\alpha\ln|z|+\beta$ ; les conditions au bord donnent <trou indice="système $2\times2$ en $(\alpha,\beta)$">$\alpha=\frac{T^+-T^-}{\ln R^+-\ln R^-}$, $\beta=\frac{T^-\ln R^+-T^+\ln R^-}{\ln R^+-\ln R^-}$</trou>, et l'unicité montre que c'est la solution.

**Cas excentré.** Après normalisation ($C^+=C(0,R^+)$, $C^-=C(c,R^-)$, $0<c$), on cherche $p<q$ réels tels que <trou indice="points inverses par rapport aux deux cercles">$pq=R^{+2}$ et $(p-c)(q-c)=R^{-2}$</trou> ; ils existent car $p+q=s=\frac{R^{+2}+c^2-R^{-2}}{c}$ vérifie $s>2R^+$ (discriminant $>0$), et l'on a $p\in D(c,R^-)$, $q>R^+$. Pour $g(z)=\frac{z-p}{z-q}$, le lemme d'Apollonius donne <trou indice="calculer $|z-p|^2/|z-q|^2$ sur un cercle dont $p,q$ sont inverses">$|g|=\sqrt{p/q}=\rho^+$ sur $C^+$ et $|g|=\sqrt{(p-c)/(q-c)}=\rho^-$ sur $C^-$</trou>. Enfin $T=T^{\rho}_{\text{centrée}}\circ g\circ\sigma$ est harmonique car <trou>composée d'une fonction harmonique et d'une fonction holomorphe</trou>, et vaut $T^\pm$ sur $C^\pm$ : c'est la solution. $\square$

## Exemples

* **Une couronne excentrée explicite.** $C^+=C(0,2)$, $C^-=C\big(\tfrac45,\tfrac45\big)$ (le cercle intérieur passe par $0$ ; il est bien intérieur : $\tfrac45+\tfrac45<2$). Ici $c=\tfrac45$, $s=\dfrac{4+\frac{16}{25}-\frac{16}{25}}{4/5}=5$, et $X^2-5X+4=(X-1)(X-4)$ : $p=1$, $q=4$. Vérifications : $pq=4=R^{+2}$ ; $(1-\tfrac45)(4-\tfrac45)=\tfrac15\cdot\tfrac{16}5=\tfrac{16}{25}=R^{-2}$ ; $p=1\in D(\tfrac45,\tfrac45)$, $q=4>2$. Donc $f(z)=\dfrac{z-1}{z-4}$, $\rho^+=\sqrt{1/4}=\tfrac12$, $\rho^-=\sqrt{\tfrac{1/5}{16/5}}=\tfrac14$. Contrôle direct : sur $|z|=2$, $\dfrac{|z-1|^2}{|z-4|^2}=\dfrac{5-2x}{20-8x}=\dfrac14$ ; sur $|z-\tfrac45|=\tfrac45$, i.e. $|z|^2=\tfrac85x$, $\dfrac{|z-1|^2}{|z-4|^2}=\dfrac{1-\frac25x}{16-\frac{32}5x}=\dfrac1{16}$. **Module conforme** $\rho^+/\rho^-=2$, alors que $R^+/R^-=\tfrac{2}{4/5}=\tfrac52$. Avec $T^-=100$, $T^+=0$ :
$$
T(z)=\frac{0-100}{\ln\frac12-\ln\frac14}\ln|f(z)|+\frac{100\ln\frac12-0}{\ln2}=-\frac{100}{\ln2}\ln|f(z)|-100=-100\log_2\big(2|f(z)|\big).
$$
Contrôle : $|f|=\tfrac12\Rightarrow T=0$ ; $|f|=\tfrac14\Rightarrow T=100$. Valeurs intérieures : $f(-1)=\tfrac{-2}{-5}=\tfrac25$, $T(-1)=-100\log_2(0{,}8)\simeq32$ (point à distance $1$ de chacune des deux parois : $2-|{-1}|=1$ pour $C^+$ et $|{-1}-\tfrac45|-\tfrac45=1$ pour $C^-$ ; la température y est pourtant nettement plus proche de $T^+=0$ que de la moyenne $50$, comme dans le cas centré où le logarithme n'est pas affine) ; $f(i)=\dfrac{i-1}{i-4}$, $|f(i)|^2=\dfrac{2}{17}$, $T(i)=-50\log_2\big(\tfrac{8}{17}\big)\simeq54$ ; $f(1{,}8)=\dfrac{0{,}8}{-2{,}2}$, $T(1{,}8)\simeq46$ : du côté où la paroi est mince ($x$ proche de $1{,}6$ à $2$), la température varie vite. Les isothermes $|z-1|=k|z-4|$ sont des cercles qui s'accumulent dans la partie mince.
* **Si l'on utilisait $R^\pm$ au lieu de $\rho^\pm$.** Avec les mêmes données, $T_{\text{centrée}}^{R}(w)=\dfrac{-100}{\ln(5/2)}\ln|w|+\dfrac{100\ln2}{\ln(5/2)}$ ; composée avec $f$, elle vaut sur $C^+$ ($|f|=\tfrac12$) : $\dfrac{100\ln2+100\ln2}{\ln(5/2)}=\dfrac{200\ln2}{\ln(5/2)}\simeq151\neq0$. Faux.
* **La figure du poly (p. 86).** Elle montre à gauche une couronne centrée $\{\tfrac13<|z|<1\}$ et à droite une couronne excentrée de même cercle extérieur, avec la légende $M(z)=\tfrac53+\tfrac{z-3}{z-2}$. Attention au sens de lecture : $3$ et $2$ ne sont **pas** des points inverses par rapport au cercle unité ($3\cdot2\neq1$), donc $M$ ne centre pas la couronne de droite ; c'est la réciproque qui joue ce rôle. En effet $M(0)=\tfrac{19}6$ et $M(\infty)=\tfrac83$, donc $M$ envoie les cercles centrés en $0$ (cercles d'Apollonius de points limites $0,\infty$) sur les cercles d'Apollonius de points limites $\tfrac{19}6,\tfrac83$, non concentriques : $M$ va de la couronne **centrée** vers une couronne **excentrée**. Calcul : $M(1)=\tfrac{11}3$, $M(-1)=3$, $M(\tfrac13)=\tfrac{49}{15}$, $M(-\tfrac13)=\tfrac{65}{21}$, d'où $M(C(0,1))=C(\tfrac{10}3,\tfrac13)$ et $M(C(0,\tfrac13))=C(\tfrac{334}{105},\tfrac3{35})$ ; à la similitude $w\mapsto3(w-\tfrac{10}3)$ près (qui ne change pas les rapports), c'est une couronne de cercle extérieur $C(0,1)$ et de cercle intérieur $C(-\tfrac{16}{35},\tfrac9{35})\simeq C(-0{,}46;\,0{,}26)$, image miroir de la figure de droite (le dessin est indicatif). La réciproque $M^{-1}(w)=\dfrac{6w-19}{3w-8}=2\,\dfrac{w-\frac{19}6}{w-\frac83}$ est exactement de la forme $\lambda\,\dfrac{w-p}{w-q}$ de la preuve, avec $p=\tfrac{19}6$, $q=\tfrac83$ les points limites de la couronne excentrée : c'est elle qui **centre** la couronne, et la température y est $T^{\rho}_{\text{centrée}}\circ M^{-1}$ avec $\rho^+=1$, $\rho^-=\tfrac13$ (module conforme $3$).

## Pièges

* > ⚠️ Calculer $T_{\text{centrée}}$ avec $R^\pm$ puis composer par $f$ : la fonction obtenue est harmonique mais ne prend **pas** les bonnes valeurs au bord (Exemple 2). Les rayons à utiliser sont ceux de la couronne **image**, $\rho^\pm$.
* > ⚠️ La couronne n'est pas simplement connexe : Riemann ne s'applique pas ([[ch04-reduction-demi-plan]], H1), et $T$ n'est **pas** la partie réelle d'une fonction holomorphe sur la couronne ($\log|z|$, [[ch04-harmoniques-radiales]]). Mais le principe du maximum et la propriété de la moyenne ([[ch04-harmonique-moyenne-maximum]]), eux, ne demandent pas la simple connexité.
* L'unicité repose sur **bornée + continue jusqu'au bord** ; sur un domaine non borné elle tombe (H3).
* La solution du cas centré n'est pas affine en $|z|$ : c'est un logarithme. La température « à mi-épaisseur » n'est pas $(T^++T^-)/2$.
* Ne pas chercher $f$ envoyant la couronne sur $H$ ou sur $D$ : on cherche une homographie qui la **centre**. Deux couronnes de modules conformes différents ne sont pas conformément équivalentes, et $\rho^+/\rho^-$ n'est pas un paramètre libre.
* L'homographie $g(z)=\frac{z-p}{z-q}$ a un pôle en $q$ : vérifier que $q\notin\bar\Omega$ (ici $q$ est hors du disque extérieur, $p$ dans le disque intérieur), sinon $T\circ g$ n'est pas définie partout.
