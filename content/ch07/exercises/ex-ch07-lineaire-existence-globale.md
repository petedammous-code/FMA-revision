---
id: ex-ch07-lineaire-existence-globale
type: exercise
chapters: [7, 5]
title: Les solutions d'une équation linéaire vivent sur tout l'intervalle
source: "Classique (existence globale pour les équations linéaires) — rédaction inventée (preuve par autonomisation et lemme des bouts)"
difficulty: 3
time: 40
tools: [ch07-cauchy-lipschitz, ch07-restriction-domaine-c1-lipschitz, ch07-equation-autonome-def, ch07-courbe-integrale-maximale-def, ch07-unicite-globale, ch07-equation-integrale, ch07-lemme-des-bouts, ch05-accroissements-finis]
---
## Énoncé

Soit $I$ un intervalle ouvert de $\R$, et $A:I\to\Mat_n(\R)$, $B:I\to\R^n$ deux applications de classe $C^1$. On munit $\R^n$ d'une norme $\|\cdot\|$ et $\Mat_n(\R)$ de la norme d'opérateur associée. On considère l'équation
$$
(L)\qquad x'(t)=A(t)\,x(t)+B(t).
$$

1. Montrer que pour tout $(\tau_0,x_0)\in I\times\R^n$, $(L)$ admet une unique solution maximale $x:J\to\R^n$ telle que $x(\tau_0)=x_0$, où $J=\,]t_-,t_+[\,\subset I$ est un intervalle ouvert contenant $\tau_0$.
2. On pose $U=I\times\R^n$ (ouvert de $\R^{1+n}$) et $Y:U\to\R^{1+n}$, $Y(s,y)=\big(1,\,A(s)y+B(s)\big)$. Montrer que $\gamma:\sigma\mapsto\big(\tau_0+\sigma,\,x(\tau_0+\sigma)\big)$, définie sur $J-\tau_0$, est la courbe intégrale **maximale** de $Y$ de condition initiale $\gamma(0)=(\tau_0,x_0)$.
3. On suppose $t_+<\sup I$. Justifier l'existence de $K_A=\max_{[\tau_0,t_+]}\|A\|$ et $K_B=\max_{[\tau_0,t_+]}\|B\|$, puis montrer que pour tout $t\in[\tau_0,t_+[$,
$$
\|x(t)\|\le\big(\|x_0\|+K_B\,(t_+-\tau_0)\big)\,e^{K_A(t-\tau_0)} .
$$
4. En déduire que $J=I$.
5. a) Pour $n=1$, $I=\,]-\infty,1[$ et $x'=\dfrac{x}{(1-t)^2}$, calculer les solutions et vérifier qu'elles sont définies sur $I$. Sont-elles bornées ? Est-ce contradictoire avec le lemme des bouts appliqué à $Y$ ?
   b) Pour $x'=x^2$ sur $I=\R$, quelle étape de la preuve tombe ?

## Indices

### Indice 1
Le lemme des bouts du cours concerne des champs **autonomes**. La question 2 fabrique un champ autonome en ajoutant le temps comme coordonnée. Il faut ensuite montrer que la trajectoire de $\gamma$ reste dans un compact de $U$ si $t_+<\sup I$.

### Indice 2
En 2, après avoir vérifié que $\gamma$ est une courbe intégrale, écrire la courbe maximale de $Y$ comme $(s(\sigma),y(\sigma))$ : l'équation $s'=1$ force $s(\sigma)=\tau_0+\sigma$, et $t\mapsto y(t-\tau_0)$ est alors solution de $(L)$. En 3, majorer $\|x(t)\|$ grâce à l'équation intégrale, puis appliquer Gronwall (poser $v(t)=\int_{\tau_0}^t\|x\|$).

### Indice 3
En 4, le compact est $K=[\tau_0,t_+]\times\bar B(0,R)$ avec $R=\big(\|x_0\|+K_B(t_+-\tau_0)\big)e^{K_A(t_+-\tau_0)}$ ; il est inclus dans $U$ **parce que** $[\tau_0,t_+]\subset I$. Que dit le lemme des bouts sur la borne supérieure de $J-\tau_0$ ?

## Corrigé

**1.** Le champ $X:I\times\R^n\to\R^n$, $X(t,x)=A(t)x+B(t)$, est continu. Il est localement lipschitzien en la seconde variable ([[ch07-localement-lipschitzien-def]]) : soit $t_1\in I$ et $[t_1-a,t_1+a]\subset I$ ; par continuité, $k=\max_{[t_1-a,t_1+a]}\|A\|$ existe et pour $|t-t_1|\le a$,
$$
\|X(t,x_1)-X(t,x_2)\|=\|A(t)(x_1-x_2)\|\le k\,\|x_1-x_2\| .
$$
Le théorème de Cauchy–Lipschitz [[ch07-cauchy-lipschitz]], l'unicité globale [[ch07-unicite-globale]] et la définition [[ch07-courbe-integrale-maximale-def]] donnent une unique solution maximale $x:J\to\R^n$, $J$ intervalle ouvert, $\tau_0\in J\subset I$.

**2.** *$Y$ est un champ autonome $C^1$.* $Y$ ne dépend pas du temps ([[ch07-equation-autonome-def]]) ; ses composantes sont $1$ et $(s,y)\mapsto A(s)y+B(s)$, $C^1$ comme composées et produits (bilinéaire $(M,y)\mapsto My$) de fonctions $C^1$. Donc $Y$ est localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]) et possède des courbes intégrales maximales.

*$\gamma$ est une courbe intégrale.* Pour $\sigma\in J-\tau_0$, $\tau_0+\sigma\in J\subset I$ donc $\gamma(\sigma)\in U$, et
$$
\gamma'(\sigma)=\big(1,\,x'(\tau_0+\sigma)\big)=\big(1,\,A(\tau_0+\sigma)x(\tau_0+\sigma)+B(\tau_0+\sigma)\big)=Y(\gamma(\sigma)),\qquad\gamma(0)=(\tau_0,x_0).
$$

*Maximalité.* Soit $\tilde\gamma=(s,y):\tilde J\to U$ la courbe maximale de $Y$ issue de $(\tau_0,x_0)$. Par maximalité, $J-\tau_0\subset\tilde J$ et $\tilde\gamma=\gamma$ sur $J-\tau_0$. D'autre part $s'(\sigma)=1$ et $s(0)=\tau_0$, donc $s(\sigma)=\tau_0+\sigma$, et $s(\sigma)\in I$ puisque $\tilde\gamma$ est à valeurs dans $U$ : $\tilde J+\tau_0\subset I$. La fonction $\tilde x(t)=y(t-\tau_0)$, définie sur l'intervalle ouvert $\tilde J+\tau_0\ni\tau_0$, vérifie
$$
\tilde x'(t)=y'(t-\tau_0)=A\big(s(t-\tau_0)\big)y(t-\tau_0)+B\big(s(t-\tau_0)\big)=A(t)\tilde x(t)+B(t),\qquad\tilde x(\tau_0)=x_0 .
$$
C'est une solution de $(L)$ de condition initiale $(\tau_0,x_0)$ ; par maximalité de $x$, $\tilde J+\tau_0\subset J$. Donc $\tilde J=J-\tau_0$ et $\tilde\gamma=\gamma$.

**3.** $\tau_0\in I$, $t_+<\sup I$ et $I$ est un intervalle, donc $[\tau_0,t_+]\subset I$ ; c'est un compact sur lequel $t\mapsto\|A(t)\|$ et $t\mapsto\|B(t)\|$ sont continues : les maxima $K_A$, $K_B$ existent. Pour $t\in[\tau_0,t_+[$, l'équation intégrale [[ch07-equation-integrale]] donne
$$
\|x(t)\|\le\|x_0\|+\int_{\tau_0}^t\big(\|A(s)\|\,\|x(s)\|+\|B(s)\|\big)ds\le c+K_A\,v(t),\qquad c=\|x_0\|+K_B(t_+-\tau_0),\quad v(t)=\int_{\tau_0}^t\|x(s)\|\,ds .
$$
Si $K_A=0$, c'est fini. Sinon, $v$ est $C^1$ avec $v'(t)=\|x(t)\|\le c+K_Av(t)$, donc
$$
\frac{d}{dt}\Big(e^{-K_A(t-\tau_0)}v(t)\Big)=e^{-K_A(t-\tau_0)}\big(v'(t)-K_Av(t)\big)\le c\,e^{-K_A(t-\tau_0)} .
$$
En intégrant sur $[\tau_0,t]$ ($v(\tau_0)=0$) : $v(t)\le\frac{c}{K_A}\big(e^{K_A(t-\tau_0)}-1\big)$, d'où $\|x(t)\|\le c+K_Av(t)\le c\,e^{K_A(t-\tau_0)}$. (C'est le lemme de Gronwall, poly, Exercice VII.4.1, p. 137.)

**4.** Supposons par l'absurde $t_+<\sup I$ et posons $R=c\,e^{K_A(t_+-\tau_0)}$. Pour $\sigma\in[0,t_+-\tau_0[$, $\gamma(\sigma)=(\tau_0+\sigma,x(\tau_0+\sigma))$ appartient à
$$
K=[\tau_0,t_+]\times\bar B(0,R),
$$
compact (produit de compacts en dimension finie) et **inclus dans $U$** car $[\tau_0,t_+]\subset I$. D'après 2., $\gamma$ est la courbe intégrale maximale du champ autonome $Y$ issue de $(\tau_0,x_0)$, d'intervalle $J-\tau_0$, de borne supérieure $t_+-\tau_0<+\infty$. Le lemme des bouts [[ch07-lemme-des-bouts]] affirme au contraire que cette borne vaut $+\infty$ : contradiction. Donc $t_+=\sup I$.

*Rigueur.* Le poly énonce le lemme des bouts pour un champ lipschitzien. Pour l'appliquer à la lettre : choisir un intervalle ouvert borné $I'$ avec $[\tau_0,t_+]\subset I'\subset\bar{I'}\subset I$, et $V=I'\times B(0,2R)$, ouvert convexe d'adhérence compacte incluse dans $U$. Sur $\bar V$, $dY$ est continue donc bornée, et par les accroissements finis ([[ch05-accroissements-finis]]) $Y_{|V}$ est lipschitzien. La courbe maximale de $Y_{|V}$ issue de $(\tau_0,x_0)$ est une courbe intégrale de $Y$, donc son intervalle est inclus dans $J-\tau_0$ ; elle contient $[0,t_+-\tau_0[$ puisque $\gamma$ y reste dans $K\subset V$. Sa borne supérieure est donc $t_+-\tau_0<+\infty$ alors qu'elle reste dans le compact $K$ de $V$ : le lemme du poly, appliqué à $Y_{|V}$, donne la même contradiction.

Le même raisonnement sur $]t_-,\tau_0]$ (avec $K_A,K_B$ pris sur $[t_-,\tau_0]$ et l'énoncé du lemme des bouts pour la borne inférieure) donne $t_-=\inf I$. Finalement $J=I$ : **toute solution maximale de $(L)$ est définie sur $I$ tout entier**.

**5. a)** Ici $A(t)=(1-t)^{-2}$ est $C^1$ sur $I$ et $B=0$. Comme $\dfrac{d}{dt}\dfrac1{1-t}=\dfrac1{(1-t)^2}$, la fonction
$$
x(t)=x_0\exp\Big(\frac1{1-t}-\frac1{1-\tau_0}\Big)
$$
vérifie $x'=\dfrac{x}{(1-t)^2}$ et $x(\tau_0)=x_0$ ; elle est définie sur $I$ (conformément à 4.) et c'est donc la solution maximale. Pour $x_0\neq0$, $|x(t)|\to+\infty$ quand $t\to1^-$ : elle n'est **pas bornée**. Aucune contradiction : la question 3 suppose $t_+<\sup I$, et quand $t\to1=\sup I$ la courbe $\gamma(\sigma)=(\tau_0+\sigma,x(\tau_0+\sigma))$ sort de tout compact de $U=I\times\R$ de toute façon, puisque sa première coordonnée tend vers le **bord** $1$ de $I$ ; le lemme des bouts n'est pas mis en défaut (et $\sup(J-\tau_0)=1-\tau_0<+\infty$ est cohérent avec le fait que $\gamma$ sort de tout compact de $U$).

**b)** Pour $x'=x^2$, $x(0)=1$, la solution maximale $x(t)=1/(1-t)$ vit sur $]-\infty,1[\,\neq\R$. Les questions 1 et 2 restent valables (champ $C^1$), mais l'estimation a priori de la question 3 tombe : elle repose sur la majoration **affine** $\|X(t,x)\|\le K_A\|x\|+K_B$, que $x^2$ ne vérifie pas ; sans borne, pas de compact, et le lemme des bouts ne dit rien.

## Pièges et variantes

* Appliquer le lemme des bouts directement à $X(t,x)=A(t)x+B(t)$ : il dépend du temps, et l'énoncé du cours est **autonome**. L'autonomisation (question 2) est la manière propre de s'y ramener ; elle oblige à vérifier que le compact est dans $U=I\times\R^n$, ce qui exige $[\tau_0,t_+]\subset I$.
* Oublier la maximalité dans 2 : savoir que $\gamma$ est une courbe intégrale ne suffit pas pour lire la borne supérieure de son intervalle maximal.
* Prendre $K_A=\sup_I\|A\|$ : il peut être infini (exemple 5.a). C'est pour cela qu'on travaille sur le compact $[\tau_0,t_+]$, qui n'existe que sous l'hypothèse absurde.
* Variante : si $A$ et $B$ sont seulement continues, le résultat reste vrai, mais $Y$ n'est plus lipschitzien en $s$ et l'autonomisation ne passe plus par Cauchy–Lipschitz pour $Y$ ; on prouve alors directement le « lemme des bouts non autonome » (si $t_+<\sup I$ et $x$ bornée sur $[\tau_0,t_+[$, $x$ se prolonge) via l'équation intégrale et le critère de Cauchy.
* Variante : la même preuve montre que tout champ $X(t,x)$ $C^1$ vérifiant $\|X(t,x)\|\le a(t)\|x\|+b(t)$ avec $a,b$ continues a ses solutions maximales définies sur $I$.
