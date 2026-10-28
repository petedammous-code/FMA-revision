---
id: ch01-morera
type: theorem
chapter: 1
title: "Théorème de Morera : caractérisation de l'holomorphie par les intégrales sur les triangles"
ref: Exercice I.8.1
page: 23
importance: 2
depends: [ch01-def-holomorphe, ch01-holomorphe-analytique, ch01-primitive-locale, ch01-integrale-primitive, ch01-integrale-reparametrage-oppose-concatenation, ch01-longueur-majoration-integrale, ch01-def-integrale-chemin]
tags: [morera, triangle, primitive, caracterisation, holomorphie]
---
## Intuition

> 💡 Pour reconnaître une fonction holomorphe, pas besoin de la dériver : il suffit de vérifier qu'elle est continue et que son intégrale le long du bord de **tout petit triangle** est nulle. C'est la réciproque du « théorème de Cauchy pour les triangles ».

Pourquoi ? Si les intégrales sur les triangles sont nulles, l'intégrale de $z_0$ à $z$ le long du segment, $F(z)=\int_{[z_0,z]}f$, se comporte comme une vraie primitive : $F(z+h)-F(z)=\int_{[z,z+h]}f\approx h\,f(z)$. Donc $F'=f$, $F$ est holomorphe, et la dérivée d'une fonction holomorphe est holomorphe ([[ch01-holomorphe-analytique]]). Intérêt pratique : la condition « intégrales nulles » passe très bien à la limite (limites uniformes, intégrales à paramètre), contrairement à la dérivabilité.

Notations. Pour $a,b\in\C$, $[a,b]$ est le chemin $t\mapsto a+t(b-a)$, $t\in[0,1]$ (segment orienté de $a$ vers $b$), et $\int_{[a,b]}f(z)\,dz=\int_0^1f(a+t(b-a))(b-a)\,dt$ ([[ch01-def-integrale-chemin]]). Le **triangle plein** de sommets $a,b,c$ est l'enveloppe convexe $T=\{\lambda a+\mu b+\nu c\ :\ \lambda,\mu,\nu\ge0,\ \lambda+\mu+\nu=1\}$ ; il est compact et convexe. On note $J_f(a,b,c):=\int_{[a,b]}f+\int_{[b,c]}f+\int_{[c,a]}f$ l'intégrale de $f$ sur le bord du triangle.

## Énoncé

**Théorème (poly, Exercice I.8.1, p. 23) — Morera (1886).** Soit $f$ une fonction continue sur un ouvert $\Omega$. On suppose que
$$
\text{(I.8.1)}\qquad\int_{[a,b]}f(z)\,dz+\int_{[b,c]}f(z)\,dz+\int_{[c,a]}f(z)\,dz=0,
$$
pour tous $a,b,c\in\Omega$ tels que le triangle plein de sommets $a$, $b$ et $c$ est inclus dans $\Omega$. Alors $f$ est holomorphe sur $\Omega$. Plus précisément (questions 1 et 2 de l'exercice) : si $z_0\in\Omega$ et $r>0$ sont tels que $D(z_0,r)\subset\Omega$, la fonction $F(z)=\int_{[z_0,z]}f(\zeta)\,d\zeta$ est dérivable au sens complexe sur $D(z_0,r)$, avec $F'=f$.

Inversement (question 3), si $f$ est holomorphe sur un ouvert $\Omega$, alors (I.8.1) est vérifié pour tous $a,b,c\in\Omega$ tels que le triangle plein de sommets $a$, $b$ et $c$ est inclus dans $\Omega$.

## Hypothèses

### H1 — $f$ est continue sur $\Omega$

**Rôle.** Elle est nécessaire pour que les intégrales de (I.8.1) soient définies au sens de la Définition I.5.4, et c'est elle qui donne $\sup_{\zeta\in[z,z+h]}|f(\zeta)-f(z)|\to0$ quand $h\to0$, donc $F'(z)=f(z)$.

**Si on la retire.** Si l'on étend la définition des intégrales (Riemann ou Lebesgue) à des fonctions discontinues, $f=\mathbf 1_{\{0\}}$ (indicatrice de $\{0\}$) sur $\Omega=\C$ vérifie (I.8.1) : sur un segment non réduit à un point, $t\mapsto f(a+t(b-a))$ est nulle sauf en au plus une valeur de $t$, donc chaque intégrale est nulle. Pourtant $f$ n'est pas holomorphe (elle n'est même pas continue en $0$).

### H2 — (I.8.1) pour **tous** les triangles pleins (non dégénérés) inclus dans $\Omega$

**Rôle.** La preuve l'utilise pour les triangles $(z_0,z,z+h)$ contenus dans un disque $D(z_0,r)\subset\Omega$ ; il suffit donc en fait de la vérifier pour les triangles contenus dans de tels disques.

**Si on la retire.** C'est exactement la condition qui sépare les fonctions holomorphes des autres fonctions continues. Pour $f(z)=\bar z$ (continue, non holomorphe) et le triangle $(0,1,i)$ :
$\int_{[0,1]}\bar z\,dz=\int_0^1t\,dt=\frac12$ ;
$\int_{[1,i]}\bar z\,dz=\int_0^1(1-t-it)(i-1)\,dt=(i-1)\bigl(\frac12-\frac i2\bigr)=i$ ;
$\int_{[i,0]}\bar z\,dz=\int_0^1\bigl(-i(1-t)\bigr)(-i)\,dt=-\frac12$. Total : $J_{\bar z}(0,1,i)=i\neq0$ (c'est $2i$ fois l'aire du triangle). Par ailleurs, la condition sur les triangles **dégénérés** (sommets alignés) ne coûte rien : elle est vraie pour toute $f$ continue (si $a,b,c$ sont sur la droite $p+s u$, $|u|=1$, chaque intégrale vaut $u\int_{s_a}^{s_b}f(p+su)\,ds$ et la relation de Chasles donne une somme nulle). Il faut donc de vrais triangles.

### H3 — (réciproque) le triangle **plein** est inclus dans $\Omega$

**Rôle.** La preuve de la réciproque découpe le triangle plein en petits triangles contenus dans des disques de $\Omega$, sur lesquels $f$ a une primitive.

**Si on la retire.** $\Omega=\C^\times$, $f(z)=1/z$, et $a=1$, $b=j=e^{2i\pi/3}$, $c=j^2$ : le bord du triangle est dans $\Omega$, mais le triangle plein contient $0$. Le segment $[1,j]$ est inclus dans $\C\setminus\R_-$ (sa partie imaginaire $t\frac{\sqrt3}{2}$ ne s'annule qu'en $t=0$, au point $1$), où le logarithme principal $\mathrm{Log}$ est une primitive holomorphe de $1/z$ ; donc $\int_{[1,j]}\frac{dz}z=\mathrm{Log}\,j-\mathrm{Log}\,1=\frac{2i\pi}3$. Par les changements de variable $z=ju$ et $z=j^2u$ (rotations, qui envoient $[1,j]$ sur $[j,j^2]$ et sur $[j^2,1]$, avec $\frac{dz}{z}=\frac{du}{u}$), $\int_{[j,j^2]}\frac{dz}{z}=\int_{[j^2,1]}\frac{dz}{z}=\int_{[1,j]}\frac{du}{u}=\frac{2i\pi}3$. Total : $2i\pi\neq0$.

## Idée de la preuve

Sens direct : sur un disque $D(z_0,r)\subset\Omega$, (I.8.1) pour le triangle $(z_0,z,z+h)$ donne $F(z+h)-F(z)=\int_{[z,z+h]}f$, d'où $F'=f$ ; $F$ est holomorphe, donc $f=F'$ aussi. Réciproque : on découpe le triangle en $4^k$ petits triangles, chacun contenu dans un disque de $\Omega$ où $f$ a une primitive, donc d'intégrale nulle.

## Preuve

**1) $F'=f$ sur un disque.** Soit $z_0\in\Omega$, $r>0$ avec $D(z_0,r)\subset\Omega$, et $F(z)=\int_{[z_0,z]}f(\zeta)\,d\zeta$ pour $z\in D(z_0,r)$. Soient $z\in D(z_0,r)$ et $h\in\C$ tel que $z+h\in D(z_0,r)$. Le disque étant convexe, le triangle plein de sommets $z_0,z,z+h$ est inclus dans $D(z_0,r)\subset\Omega$, et (I.8.1) donne
$$
\int_{[z_0,z]}f+\int_{[z,z+h]}f+\int_{[z+h,z_0]}f=0 .
$$
Le chemin $[z+h,z_0]$ est l'opposé de $[z_0,z+h]$, donc $\int_{[z+h,z_0]}f=-F(z+h)$ (Proposition I.5.6 (ii), [[ch01-integrale-reparametrage-oppose-concatenation]]). Ainsi $F(z+h)-F(z)=\int_{[z,z+h]}f(\zeta)\,d\zeta$. Comme $\int_{[z,z+h]}d\zeta=\int_0^1h\,dt=h$,
$$
F(z+h)-F(z)-h\,f(z)=\int_{[z,z+h]}\bigl(f(\zeta)-f(z)\bigr)\,d\zeta,
\qquad\text{donc}\qquad
\bigl|F(z+h)-F(z)-h\,f(z)\bigr|\le|h|\sup_{\zeta\in[z,z+h]}|f(\zeta)-f(z)|
$$
par la Proposition I.5.7 ([[ch01-longueur-majoration-integrale]]), la longueur de $[z,z+h]$ étant $|h|$. Par continuité de $f$ en $z$, le sup tend vers $0$ quand $h\to0$. Donc $\frac{F(z+h)-F(z)}{h}\to f(z)$ : $F$ est $\C$-dérivable en $z$ et $F'(z)=f(z)$.

**2) $f$ est holomorphe.** Sur $D(z_0,r)$, $F$ est $\C$-dérivable en tout point (donc continue) et $F'=f$ est continue : $F\in\Hol(D(z_0,r))$ ([[ch01-def-holomorphe]]). D'après le Théorème I.7.4 et sa conséquence ([[ch01-holomorphe-analytique]]), la dérivée d'une fonction holomorphe est holomorphe : $f=F'\in\Hol(D(z_0,r))$. Tout point de l'ouvert $\Omega$ est le centre d'un tel disque, et l'holomorphie est une propriété locale : $f\in\Hol(\Omega)$.

**3) Réciproque.** Soit $f\in\Hol(\Omega)$ et $T$ le triangle plein de sommets $a,b,c$, inclus dans $\Omega$.

*Cas d'un triangle contenu dans un disque ouvert $D\subset\Omega$.* D'après le Corollaire I.7.6 ([[ch01-primitive-locale]]), $f$ a une primitive $F\in\Hol(D)$ ; les trois segments sont des chemins de $D$, donc par le Théorème I.5.9 ([[ch01-integrale-primitive]])
$$
J_f(a,b,c)=\bigl(F(b)-F(a)\bigr)+\bigl(F(c)-F(b)\bigr)+\bigl(F(a)-F(c)\bigr)=0 .
$$

*Cas général : découpage.* Si $\Omega=\C$, $T$ est contenu dans un disque ouvert assez grand et l'on conclut par le cas précédent. Sinon, $T$ est compact, $\C\setminus\Omega$ est fermé et disjoint de $T$, donc $\delta:=\dist(T,\C\setminus\Omega)>0$ ; pour tout $v\in T$, $D(v,\delta)\subset\Omega$. Notons $a'=\frac{b+c}2$, $b'=\frac{a+c}2$, $c'=\frac{a+b}2$ les milieux des côtés. Alors
$$
J_f(a,b,c)=J_f(a,c',b')+J_f(c',b,a')+J_f(b',a',c)+J_f(a',b',c').
$$
En effet, en développant le membre de droite, les segments intérieurs apparaissent deux fois avec des orientations opposées ($[c',b']$ et $[b',c']$, $[a',c']$ et $[c',a']$, $[b',a']$ et $[a',b']$) et se compensent (Proposition I.5.6 (ii)) ; il reste $[a,c']$ et $[c',b]$, qui recollés donnent $[a,b]$ (Proposition I.5.6 (i) et (iii), ou simplement Chasles sur $[0,1]$ coupé en $\frac12$), et de même $[b,a']\vee[a',c]$ donne $[b,c]$, $[c,b']\vee[b',a]$ donne $[c,a]$. Les quatre sous-triangles sont inclus dans $T$ et ont un diamètre égal à la moitié de celui de $T$ (le diamètre d'un triangle est la longueur de son plus grand côté). En itérant $k$ fois, $J_f(a,b,c)$ est la somme des $J_f$ de $4^k$ triangles pleins $T'\subset T$ de diamètre $\frac{\mathrm{diam}(T)}{2^k}$. Choisissons $k$ tel que $\frac{\mathrm{diam}(T)}{2^k}<\delta$. Si $v$ est un sommet de $T'$, tout point de $T'$ est à distance $<\delta$ de $v$, donc $T'\subset D(v,\delta)\subset\Omega$, et le premier cas donne $J_f(T')=0$. Donc $J_f(a,b,c)=0$ : c'est (I.8.1). $\square$

## Preuve à trous

*Sens direct.* Sur $D(z_0,r)\subset\Omega$, on pose $F(z)=\int_{[z_0,z]}f$. On applique (I.8.1) au triangle <trou indice="quels trois sommets ? le disque est convexe">de sommets $z_0$, $z$, $z+h$ (inclus dans le disque convexe $D(z_0,r)$)</trou>, ce qui donne $F(z+h)-F(z)=\int_{[z,z+h]}f$. Puis
<trou indice="soustraire h f(z) et majorer par sup × longueur">$|F(z+h)-F(z)-hf(z)|=\bigl|\int_{[z,z+h]}(f(\zeta)-f(z))\,d\zeta\bigr|\le|h|\sup_{[z,z+h]}|f-f(z)|$</trou>, qui est $o(|h|)$ par continuité de $f$ : $F'=f$. Ainsi $F$ est holomorphe sur le disque, et <trou indice="régularité des fonctions holomorphes (Théorème I.7.4)">la dérivée d'une fonction holomorphe étant holomorphe, $f=F'$ est holomorphe sur $D(z_0,r)$</trou>, donc sur $\Omega$ (propriété locale).

*Réciproque.* Si $T$ est dans un disque $D\subset\Omega$, $f$ y a une primitive et $J_f(T)=0$ (les termes se télescopent). Sinon, avec $\delta=\dist(T,\C\setminus\Omega)>0$, <trou indice="subdivision par les milieux">on découpe $T$ par les milieux des côtés en 4 triangles (les côtés intérieurs se compensent), et on itère jusqu'à obtenir $4^k$ triangles de diamètre $<\delta$, chacun inclus dans un disque $D(v,\delta)\subset\Omega$</trou>, d'intégrales toutes nulles. $\square$

## Exemples

* **Limites uniformes (Weierstrass, chapitre III).** Si $f_n\in\Hol(\Omega)$ converge vers $f$ uniformément sur tout compact de $\Omega$, alors $f$ est continue et, pour tout triangle plein $T\subset\Omega$, $|J_f(T)-J_{f_n}(T)|\le L(\partial T)\sup_{\partial T}|f-f_n|\to0$ (Proposition I.5.7) avec $J_{f_n}(T)=0$ (réciproque). Donc $J_f(T)=0$ et $f$ est holomorphe par Morera. Résultat faux en variable réelle : une limite uniforme de fonctions dérivables n'est pas forcément dérivable.
* **Un point « effaçable » pour une fonction continue.** Soit $f$ continue sur $\Omega$ et holomorphe sur $\Omega\setminus\{p\}$. Alors $f\in\Hol(\Omega)$. Soit $T=(a,b,c)$ un triangle plein inclus dans $\Omega$, non dégénéré (le cas dégénéré est automatique, cf. H2). Si $p\notin T$, $J_f(T)=0$ par la réciproque appliquée sur $\Omega\setminus\{p\}$. Si $p$ est un sommet, disons $a=p$ : pour $t\in\,]0,1]$, posons $b_t=p+t(b-p)$, $c_t=p+t(c-p)$ ; on vérifie comme ci-dessus que $J_f(p,b,c)=J_f(p,b_t,c_t)+J_f(b_t,b,c)+J_f(b_t,c,c_t)$, les deux derniers triangles ne contenant pas $p$ (point extrémal de $T$), donc $J_f(T)=J_f(p,b_t,c_t)$, et $|J_f(p,b_t,c_t)|\le t\,L(\partial T)\sup_T|f|\to0$. Si $p\in T$ n'est pas un sommet, $J_f(a,b,c)=J_f(p,b,c)+J_f(a,p,c)+J_f(a,b,p)$ (les segments issus de $p$ se compensent) ; chaque sous-triangle est inclus dans $T$ et a $p$ pour sommet, donc chaque terme est nul par le cas précédent (ou automatiquement si le sous-triangle est dégénéré, par exemple lorsque $p$ est sur un côté de $T$). Morera conclut.
* **Vérification sur un exemple.** Pour $f(z)=z^2$ et le triangle $(0,1,i)$ : $\int_{[0,1]}z^2dz=\frac13$, $\int_{[1,i]}z^2dz=\frac{i^3-1}{3}=\frac{-i-1}{3}$, $\int_{[i,0]}z^2dz=\frac{0-i^3}{3}=\frac{i}{3}$ (primitive $z^3/3$) ; somme $\frac{1-i-1+i}{3}=0$. ✓ Comparer avec $J_{\bar z}(0,1,i)=i$ (H2).

## Pièges

* > ⚠️ L'hypothèse de **continuité** de $f$ est indispensable (H1), et l'on n'a pas besoin de supposer $f$ dérivable : c'est tout l'intérêt du théorème.
* Il faut l'intégrale nulle sur des triangles **pleins inclus dans $\Omega$** ; pour la réciproque, un triangle dont seul le bord est dans $\Omega$ ne convient pas ($1/z$ autour de $0$, H3).
* Dans la preuve, $F$ n'est définie que sur un **disque** (ou un ouvert convexe/étoilé) : on ne construit pas de primitive globale sur $\Omega$, et il n'y en a pas en général.
* Morera donne d'abord $F$ holomorphe ; pour conclure sur $f=F'$, il faut le Théorème I.7.4 (les dérivées des fonctions holomorphes sont holomorphes) : ne pas oublier cette étape.
